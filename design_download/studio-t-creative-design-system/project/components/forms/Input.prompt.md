Form primitives composed together for the "Let's chat!" contact pattern.

```jsx
<Field label="Email" htmlFor="email" required hint="We reply within 1 business day">
  <Input id="email" type="email" placeholder="you@company.com" />
</Field>
<Field label="What are you trying to improve?">
  <Select><option>Brand Identity</option><option>Content System</option></Select>
</Field>
<Checkbox checked={ok} onChange={...} label="Send me the resource hub" />
```

Group exports: `Input` (sizes sm/md/lg, `invalid`), `Field` (label/hint/error/required), `Select` (custom chevron), `Checkbox`. All share the terracotta focus ring.
