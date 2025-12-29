# Waitlist Form Setup Guide

This guide documents how to connect the waitlist form to Notion. The form UI is already built — this adds the backend.

**Status:** Not implemented yet (need Notion workspace admin permissions)

---

## Prerequisites

- Admin access to a Notion workspace (to create integrations)
- Vercel project access (to add environment variables)

---

## Part 1: Notion Setup (You Do This)

### Step 1: Create a Notion Integration

1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Name it: `Social Highlighter Waitlist`
4. Select your workspace under "Associated workspace"
5. Click "Submit"
6. Copy the **Internal Integration Token** (starts with `secret_...`)

> **Troubleshooting:** If you don't see your workspace, you need admin permissions. Check Settings & members → Members → your role should say "Admin"

### Step 2: Create a Notion Database

1. In Notion, create a new page called "Waitlist Signups"
2. Add a **Table** (full page database)
3. Set up these columns:
   - `Email` (Title) — this is the default first column
   - `Role` (Select) — add options: `Player`, `Parent`, `Coach`
   - `Created time` (Created time) — auto-fills when entry is added
4. Click `•••` (top right) → "Add connections" → Select your integration

### Step 3: Get the Database ID

1. Open your database page in Notion
2. Look at the URL: `notion.so/your-workspace/abc123def456?v=...`
3. Copy the 32-character ID before the `?` (e.g., `abc123def456`)

---

## Part 2: Code Implementation (Claude Does This)

Once you have Notion set up, ask Claude to implement the waitlist form with these details:

### Files to create/modify:

1. **Install dependency:**
   ```bash
   npm install @notionhq/client
   ```

2. **Create `.env.local`** (project root, not committed to git):
   ```
   NOTION_API_KEY=secret_your_token_here
   NOTION_DATABASE_ID=your_32_character_id_here
   ```

3. **Create API route** at `src/app/api/waitlist/route.ts`:
   ```typescript
   import { Client } from "@notionhq/client";
   import { NextResponse } from "next/server";

   const notion = new Client({ auth: process.env.NOTION_API_KEY });

   export async function POST(request: Request) {
     try {
       const { email, role } = await request.json();

       await notion.pages.create({
         parent: { database_id: process.env.NOTION_DATABASE_ID! },
         properties: {
           Email: { title: [{ text: { content: email } }] },
           Role: role ? { select: { name: role } } : undefined,
         },
       });

       return NextResponse.json({ success: true });
     } catch (error) {
       console.error("Waitlist submission error:", error);
       return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
     }
   }
   ```

4. **Update `src/components/Pricing.tsx`:**
   - Add `error` state: `const [error, setError] = useState(false);`
   - Replace mock `handleWaitlistSubmit` with real API call to `/api/waitlist`
   - Add error message UI below submit button

---

## Part 3: Vercel Deployment

After testing locally:

1. Go to Vercel → Your project → Settings → Environment Variables
2. Add:
   - `NOTION_API_KEY` = your integration token
   - `NOTION_DATABASE_ID` = your database ID
3. Redeploy

---

## Testing Checklist

- [ ] Submit form on localhost → entry appears in Notion
- [ ] Submit with role selected → Role column populated
- [ ] Submit without role → Entry created with empty Role
- [ ] Disconnect internet → Error message shown, form data preserved
- [ ] Deploy to Vercel → Form works in production

---

## Resources

- [Notion API Docs](https://developers.notion.com/docs/create-a-notion-integration)
- [Creating contact forms with Notion API (LogRocket)](https://blog.logrocket.com/creating-contact-forms-with-the-notion-api-and-next-js/)
