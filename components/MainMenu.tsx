import Link from "next/link";
import Image from "next/image";

export default function MainMenu() {
  return (
    <div className="flex w-full items-center justify-between p-4">
      <Link href="/">
        <Image
          src="/Logo-F1.png"   // include extension
          alt="F1 Stats Logo"
          width={120}
          height={40}
          priority
        />
      </Link>

      <nav>
        <ul className="flex gap-6 items-center">
          <li><Link href="/drivers">Drivers</Link></li>
          <li><Link href="/races">Races</Link></li>
          <li><Link href="/schedule">Schedule</Link></li>
        </ul>
      </nav>
    </div>
  );
}