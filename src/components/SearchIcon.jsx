const SearchIcon = ({ size = 24 }) => (
    <svg
        className="pl-1 font-bold"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="11"
            cy="11"
            r="8"
            stroke="white"
            strokeWidth="2"
        />
        <line
            x1="21"
            y1="21"
            x2="16.65"
            y2="16.65"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

export default SearchIcon;
