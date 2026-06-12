import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import { Bold, Italic, List, ListOrdered, Heading2, Link as LinkIcon, Unlink } from 'lucide-react';

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
}

const RichTextEditor = ({ content, onChange }: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-primary underline cursor-pointer',
        },
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none min-h-[250px] p-4 focus:outline-none bg-gray-900 border border-gray-800 rounded-b-xl font-sans',
      },
    },
  });

  if (!editor) {
    return null;
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    if (url === null) {
      return;
    }

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-gray-800">
      <div className="flex items-center gap-2 p-2 bg-gray-950 border-b border-gray-800 flex-wrap">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded-md transition-colors ${editor.isActive('bold') ? 'bg-primary/20 text-primary' : 'hover:bg-white/10 text-gray-400'}`}
          title="Bold"
        >
          <Bold size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded-md transition-colors ${editor.isActive('italic') ? 'bg-primary/20 text-primary' : 'hover:bg-white/10 text-gray-400'}`}
          title="Italic"
        >
          <Italic size={18} />
        </button>
        
        <div className="w-px h-6 bg-gray-800 mx-1"></div>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded-md transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-primary/20 text-primary' : 'hover:bg-white/10 text-gray-400'}`}
          title="Heading"
        >
          <Heading2 size={18} />
        </button>

        <div className="w-px h-6 bg-gray-800 mx-1"></div>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded-md transition-colors ${editor.isActive('bulletList') ? 'bg-primary/20 text-primary' : 'hover:bg-white/10 text-gray-400'}`}
          title="Bullet List"
        >
          <List size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded-md transition-colors ${editor.isActive('orderedList') ? 'bg-primary/20 text-primary' : 'hover:bg-white/10 text-gray-400'}`}
          title="Ordered List"
        >
          <ListOrdered size={18} />
        </button>

        <div className="w-px h-6 bg-gray-800 mx-1"></div>

        <button
          type="button"
          onClick={setLink}
          className={`p-2 rounded-md transition-colors ${editor.isActive('link') ? 'bg-primary/20 text-primary' : 'hover:bg-white/10 text-gray-400'}`}
          title="Add Link"
        >
          <LinkIcon size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive('link')}
          className={`p-2 rounded-md transition-colors ${!editor.isActive('link') ? 'opacity-50 cursor-not-allowed text-gray-600' : 'hover:bg-white/10 text-gray-400'}`}
          title="Remove Link"
        >
          <Unlink size={18} />
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
