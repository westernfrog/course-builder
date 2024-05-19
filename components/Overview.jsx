"use client";
import { ChevronDown, FileTextIcon, LinkIcon } from "lucide-react";
import { useRef, useState } from "react";

export default function Overview(params) {
  const [course, setCourse] = useState([
    {
      id: 1,
      name: "Introduction to Trignometry",
      content: "Add items to this module",
      icon: ChevronDown,
    },
    {
      id: 2,
      name: "Understanding Trignometry",
      content: "Link",
      icon: LinkIcon,
    },
    {
      id: 3,
      name: "Sin, Cos and Tan",
      content: "PDF",
      icon: FileTextIcon,
    },
  ]);

  const dragItem = useRef(0);
  const draggedOverItem = useRef(0);

  function handleSort() {
    const courseClone = [...course];
    const temp = courseClone[dragItem.current];
    courseClone[dragItem.current] = courseClone[draggedOverItem.current];
    courseClone[draggedOverItem.current] = temp;
    setCourse(courseClone);
  }

  return (
    <>
      <main className="my-10 space-y-4">
        {course.map((item, index) => (
          <div
            key={item.id}
            className="cursor-grab relative flex items-center gap-3 rounded-lg px-4 py-3 ring-1 ring-neutral-300 shadow"
            draggable
            onDragStart={() => (dragItem.current = index)}
            onDragEnter={() => (draggedOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <div
              className={`${
                item.content == "Link"
                  ? "bg-cyan-100 text-cyan-600"
                  : item.content == "PDF"
                  ? "bg-rose-100 text-rose-600"
                  : "bg-gray-200 text-neutral-800"
              } rounded w-10 h-10 flex items-center justify-center`}
            >
              <item.icon className="block" size={18} />
            </div>
            <div>
              <h1 className="font-semibold">{item.name}</h1>
              <p className="text-sm text-black/60">{item.content}</p>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
