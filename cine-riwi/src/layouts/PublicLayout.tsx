import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header
        style={{ backgroundColor: "var(--color-tertiary)", padding: "1rem" }}
      >
        <h1 style={{ color: "var(--color-primary)", margin: 0 }}>Multicine</h1>
      </header>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <footer
        style={{
          backgroundColor: "#090c10",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-label)",
            fontSize: "0.8rem",
            color: "var(--color-neutral)",
          }}
        >
          © Multicine Platform
        </p>
      </footer>
    </div>
  );
};

export default PublicLayout;
