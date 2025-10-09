import {FunctionComponent, useEffect} from "react";
import editorjsHTML from "editorjs-html";
import './BlogDetails.css'
import {ArrowLeft, Calendar, Clock} from "lucide-react";
import {Link, useParams} from "react-router";
import {resolveSlug} from "@/lib/utils.ts";
import {Button} from "@/components/ui/button.tsx";
import {BLOG_LIST} from "@/constants/blogs.ts";

const content = {
    "time": 1759468800000,
    "blocks": [
        {
            "type": "paragraph",
            "data": {
                "text": "React continues to evolve rapidly, introducing new features that simplify component design and improve performance. This post explores some of the most useful patterns every developer should know in 2025."
            }
        },
        {
            "type": "header",
            "data": {
                "text": "1. Server Components",
                "level": 3
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": "Server Components allow developers to offload rendering to the server, reducing client-side bundle size and improving Time to Interactive."
            }
        },
        {
            "type": "code",
            "data": {
                "code": "export default async function Page() {\n  const data = await getData();\n}"
            }
        },
        {
            "type": "header",
            "data": {
                "text": "2. Composition over Inheritance",
                "level": 3
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": "React embraces composition as its core design principle. You can build flexible APIs by combining smaller components instead of relying on class inheritance."
            }
        },
        {
            "type": "list",
            "data": {
                "style": "unordered",
                "items": [
                    "Use custom hooks for shared logic",
                    "Wrap reusable logic in higher-order components",
                    "Use context sparingly for global state"
                ]
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": "These modern patterns ensure React apps remain modular, scalable, and easier to maintain."
            }
        }
    ],
    "version": "2.29.1"
}


const BlogDetails: FunctionComponent = () => {


    const { slug } = useParams<{ slug: string }>();
    const blog = BLOG_LIST.filter(p => p.isActive).find((p) => resolveSlug(p.name) === slug);
    const edjsParser = editorjsHTML();
    const html = edjsParser.parse(content);

    useEffect(() => {
        document.querySelectorAll("pre").forEach((block) => {
            if (block.querySelector(".copy-btn")) return;

            const btn = document.createElement("button");
            btn.className =
                "copy-btn absolute top-2 right-2 text-xs bg-muted text-foreground px-2 py-1 rounded flex items-center gap-1";
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;

            btn.onclick = () => {
                const code = Array.from(block.childNodes)
                    .filter((n) => n !== btn)
                    .map((n) => n.textContent)
                    .join("\n")
                    .trim();
                navigator.clipboard.writeText(code);
                btn.innerHTML = `Copied!`;
                setTimeout(() => {
                    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
                }, 1500);
            };

            block.style.position = "relative";
            block.appendChild(btn);
        });
    }, [html]);

    const formatDate = (epochTimestamp: number): string => {
        const date = new Date(epochTimestamp);
        return date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }

    if (!blog) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h2 className="text-2xl font-bold mb-4">Blog not found / Blog data not yet available</h2>
                <Button asChild variant="default">
                    <Link to="/blogs">
                        <ArrowLeft className="mr-2" size={16} />
                        Back to Blogs
                    </Link>
                </Button>
            </div>
        );
    }

    return (
        <>
            <header className="mb-8">
                <h1 className="text-3xl font-bold mb-4">{blog.name}</h1>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4"/>
                        {formatDate(blog.createdAt)}
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4"/>
                        {blog.readingTimeMins} mins
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </header>
            <div className="content" dangerouslySetInnerHTML={{__html: html}}/>
        </>
    );
}

export default BlogDetails;