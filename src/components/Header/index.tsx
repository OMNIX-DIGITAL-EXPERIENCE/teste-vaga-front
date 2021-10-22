interface HeaderProps {
    phone?: string
}

const Header: React.FC<HeaderProps> = ({ phone }) => {
    return (
        <header className="h-14 px-4 flex justify-between items-center">
            <span>Logo</span>
            <span>{phone}</span>
        </header>
    )
}

export default Header;