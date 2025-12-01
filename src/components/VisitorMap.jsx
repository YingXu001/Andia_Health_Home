// src/components/VisitorMap.jsx
export default function VisitorMap() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2rem",
        marginBottom: "3rem",
      }}
    >
      <a
        href="https://clustrmaps.com/site/1c8ln"
        title="Visit tracker"
        target="_blank"
        rel="noreferrer"
      >
        <img
        src="//clustrmaps.com/map_v2.png?cl=ffffff&w=1000&t=n&d=1tHcniQBv9LAcgz_uim5MEGXXiQrVB1-FjfwxukzRWk"
        alt="Visitor map"
        style={{
            display: "block",
            maxWidth: "100%",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        }}
        />
      </a>
    </div>
  );
}



