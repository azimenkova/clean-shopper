import { House, Search, ClipboardCheck, User } from 'lucide-react';

const TABS = [
  { key: 'home', label: 'Home', icon: House },
  { key: 'search', label: 'Search', icon: Search },
  { key: 'lists', label: 'Lists', icon: ClipboardCheck },
  { key: 'profile', label: 'Profile', icon: User },
];

export default function NavBar({ activeTab, onTabChange }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-neutral-200 px-md py-sm font-primary z-50 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around max-w-content mx-auto">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onTabChange(tab.key)}
              className={`flex flex-col items-center gap-xs py-xs px-sm rounded-md transition-colors duration-fast ease-default outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-1 hover:bg-sand-100 ${
                isActive ? 'text-primary-500' : 'text-neutral-400'
              }`}
            >
              <Icon size={24} />
              <span
                className={`text-caption ${
                  isActive
                    ? 'text-primary-700 font-medium'
                    : 'text-neutral-500'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
