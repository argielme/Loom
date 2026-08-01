import { useState } from "react";

function Sidebar({ username }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 w-72 -translate-x-full transition-transform border md:static md:-translate-x-0 ${isOpen ? "-translate-x-0" : ""}`}
      >
        <header className="flex items-center justify-between px-4 py-2">
          <a>Loom</a>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-search-icon lucide-search"
              className="cursor-pointer"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-panel-left-icon lucide-panel-left"
              className="cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 3v18" />
            </svg>
          </div>
        </header>
        <ul className="flex flex-col px-4 py-2">
          <li className="flex items-center gap-2 p-1 rounded-xl text-sm cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-message-circle-plus-icon lucide-message-circle-plus"
            >
              <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
            New Chat
          </li>
          <li className="flex items-center gap-2 p-1 rounded-xl text-sm cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"
            >
              <rect width="7" height="9" x="3" y="3" rx="1" />
              <rect width="7" height="5" x="14" y="3" rx="1" />
              <rect width="7" height="9" x="14" y="12" rx="1" />
              <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
            Dashboard
          </li>
        </ul>
        <nav className="flex flex-col px-4 py-2">
          <div>
            <h2 className="text-sm">Recents</h2>
          </div>
        </nav>
        <div className="absolute bottom-0 left-0 w-full flex p-4 gap-2 border-t">
          <div className="w-8 h-8 flex items-center justify-center border rounded-full">
            <p>{username[0].toUpperCase()}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>{username.charAt(0).toUpperCase() + username.slice(1)}</p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
