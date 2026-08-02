"use client";

import { useRef, useEffect } from "react";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

export function CodeEditor({ value, onChange, onKeyDown }: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Tab indentation
    if (e.key === "Tab") {
      e.preventDefault();
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newValue = value.substring(0, start) + "  " + value.substring(end);
      onChange(newValue);

      // Restore cursor position
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      }, 0);
    }

    onKeyDown?.(e);
  };

  return (
    <div className="relative rounded-lg border border-border bg-[#1a1b26] font-mono text-sm">
      {/* Line numbers gutter */}
      <div className="pointer-events-none absolute left-0 top-0 flex h-full w-12 select-none border-r border-border bg-[#15161e]">
        <div className="flex flex-col items-end py-4 pr-2 text-xs leading-6 text-muted-foreground/50">
          {value.split("\n").map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
      </div>

      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="h-72 w-full resize-y bg-transparent py-4 pl-14 pr-4 font-mono text-foreground caret-primary outline-none placeholder:text-muted-foreground/30"
        placeholder="Escribí tu solución acá..."
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
      />
    </div>
  );
}
