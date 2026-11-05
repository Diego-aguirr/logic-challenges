"use client";

import { useEffect, useRef, useCallback } from "react";
import { EditorView, basicSetup } from "codemirror";
import { lineNumbers } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

interface EditorViewWithHandler extends EditorView {
  _keydownHandler?: (e: KeyboardEvent) => void;
}

export function CodeEditor({ value, onChange, onKeyDown }: CodeEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const onKeyDownRef = useRef<((e: React.KeyboardEvent) => void) | undefined>(undefined);

  // Actualizar el ref fuera del render
  useEffect(() => {
    onKeyDownRef.current = onKeyDown;
  }, [onKeyDown]);

  const handleChange = useCallback(
    (update: {
      docChanged: boolean;
      state: { doc: { toString: () => string } };
    }) => {
      if (update.docChanged) {
        onChange(update.state.doc.toString());
      }
    },
    [onChange]
  );

  useEffect(() => {
    if (!editorRef.current || viewRef.current) return;

    const state = EditorState.create({
      doc: value,
      extensions: [
        basicSetup,
        lineNumbers(),
        javascript(),
        oneDark,
        EditorView.updateListener.of(handleChange),
      ],
    });

    const view = new EditorView({
      state,
      parent: editorRef.current,
    });

    if (onKeyDownRef.current) {
      const onKeyDownHandler = (e: KeyboardEvent) => {
        onKeyDownRef.current?.(e as unknown as React.KeyboardEvent);
      };
      view.dom.addEventListener("keydown", onKeyDownHandler);
      (view as EditorViewWithHandler)._keydownHandler = onKeyDownHandler;
    }

    viewRef.current = view;

    return () => {
      const v = viewRef.current as EditorViewWithHandler | null;
      if (v?._keydownHandler) {
        view.dom.removeEventListener("keydown", v._keydownHandler);
      }
      view.destroy();
      viewRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleChange]);

  // Sincronizar valor externo (reset de código, etc.)
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;

    const currentDoc = view.state.doc.toString();
    if (currentDoc !== value) {
      view.dispatch({
        changes: { from: 0, to: currentDoc.length, insert: value },
      });
    }
  }, [value]);

  return (
    <div
      ref={editorRef}
      className="relative rounded-lg border border-border bg-[#1a1b26] font-mono text-sm h-72 w-full overflow-hidden"
    />
  );
}
