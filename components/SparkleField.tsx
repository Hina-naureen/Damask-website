export default function SparkleField() {
  return (
    <div className="sparkle-field" aria-hidden="true">
      {Array.from({ length: 14 }).map((_, i) => (
        <span className="sparkle" key={i} />
      ))}
    </div>
  );
}
