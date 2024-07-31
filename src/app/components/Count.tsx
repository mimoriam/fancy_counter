interface CountProps {
  count: number;
}

export default function Count({ count }: CountProps) {
  return <h1 className="card-title">{count}</h1>;
}
