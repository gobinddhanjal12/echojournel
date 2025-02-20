import Header from "./components/Header/Header";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <div className="container">
                {children}
            </div>
        </div>
    );
}