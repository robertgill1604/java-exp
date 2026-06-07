"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function RegistrationFormSim() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("India");
  const [password, setPassword] = useState("");
  const [sub, setSub] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; msg: string } | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setResult({ ok: false, msg: "All fields are required." });
      return;
    }
    if (!/^.+@.+\..+$/.test(email)) {
      setResult({ ok: false, msg: "Invalid email format." });
      return;
    }
    if (password.length < 6) {
      setResult({ ok: false, msg: "Password must be ≥ 6 characters." });
      return;
    }
    setResult({ ok: true, msg: `Welcome, ${name}! Registered from ${country}${sub ? " (newsletter subscribed)" : ""}.` });
  };

  return (
    <form onSubmit={submit} className="space-y-3 max-w-md">
      <p className="text-sm text-muted-foreground">A JavaFX-style registration form with validation. Submit to see the Alert equivalent.</p>
      <div>
        <label className="text-xs font-semibold">Name</label>
        <Input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" />
      </div>
      <div>
        <label className="text-xs font-semibold">Email</label>
        <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" type="email" />
      </div>
      <div>
        <label className="text-xs font-semibold">Password</label>
        <Input value={password} onChange={e => setPassword(e.target.value)} placeholder="≥ 6 chars" type="password" />
      </div>
      <div>
        <label className="text-xs font-semibold">Country</label>
        <select value={country} onChange={e => setCountry(e.target.value)} className="w-full p-2 rounded-md bg-background border border-border/40 text-sm">
          <option>India</option><option>USA</option><option>UK</option><option>Japan</option><option>Other</option>
        </select>
      </div>
      <label className="flex items-center gap-2 text-xs">
        <input type="checkbox" checked={sub} onChange={e => setSub(e.target.checked)} />
        Subscribe to newsletter
      </label>
      <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-amber-500">Register</Button>
      {result && (
        <div className={`p-3 rounded-md border text-sm ${result.ok ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400" : "border-red-500/40 bg-red-500/10 text-red-400"}`}>
          {result.ok ? "✓ " : "✗ "}{result.msg}
        </div>
      )}
    </form>
  );
}
