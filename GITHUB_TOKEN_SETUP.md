# GitHub Personal Access Token Setup - Step by Step

## What's Happening?
macOS Keychain is asking for your Mac password because Git is trying to access stored credentials. Since you don't have GitHub credentials stored yet, let's set up a Personal Access Token instead.

## Solution: Create a Personal Access Token

### Step 1: Create the Token on GitHub

1. **Go to GitHub Settings:**
   - Visit: https://github.com/settings/tokens
   - Or: GitHub.com → Click your profile picture → Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **Generate New Token:**
   - Click "Generate new token" → "Generate new token (classic)"
   
3. **Configure the Token:**
   - **Note:** `EAZ AL TALAB Project`
   - **Expiration:** Choose "No expiration" or "90 days"
   - **Select scopes:** Check these boxes:
     - ✅ `repo` (Full control of private repositories)
     - ✅ `workflow` (Update GitHub Action workflows)
   
4. **Generate and Copy:**
   - Click "Generate token" at the bottom
   - **IMPORTANT:** Copy the token immediately (starts with `ghp_`)
   - You won't be able to see it again!
   - Example: `ghp_1234567890abcdefghijklmnopqrstuvwxyz`

### Step 2: Store the Token Safely

**Save it somewhere safe:**
- In a password manager
- In a secure note
- Or write it down temporarily

### Step 3: Use the Token to Push

**Open Terminal and run:**

```bash
cd /Users/rangampetasairam/Desktop/EAZ\ AL
git push -u origin main
```

**When prompted:**
- **Username:** `rsairam123`
- **Password:** `paste_your_token_here` (the ghp_... token you just created)

**Mac Keychain Password:**
- If macOS asks for "keychain password", enter your **Mac login password**
- This allows macOS to save the token for future use
- Check "Always Allow" so you don't have to enter it again

### Step 4: Verify the Push

After successful push, verify at:
https://github.com/rsairam123/Eaz_AL_TALAB

## Alternative: Skip Keychain (Simpler)

If you don't want to deal with Keychain, you can disable it:

```bash
# Disable credential helper
git config --global --unset credential.helper

# Then push (you'll need to enter token each time)
cd /Users/rangampetasairam/Desktop/EAZ\ AL
git push -u origin main
```

When prompted:
- Username: `rsairam123`
- Password: `your_token_here`

## Quick Reference

**Your GitHub Info:**
- Username: `rsairam123`
- Repository: `Eaz_AL_TALAB`
- URL: https://github.com/rsairam123/Eaz_AL_TALAB.git

**Token Format:**
- Starts with: `ghp_`
- Length: ~40 characters
- Example: `ghp_1234567890abcdefghijklmnopqrstuvwxyz`

## Troubleshooting

### "Bad credentials" error
- Token might be expired or incorrect
- Create a new token and try again

### "Repository not found"
- Make sure the repository exists: https://github.com/rsairam123/Eaz_AL_TALAB
- Check you have write access

### Keychain keeps asking
- Enter your Mac password
- Click "Always Allow"
- Or disable credential helper (see Alternative above)

## After Successful Push

Once pushed, you can:
1. View your code: https://github.com/rsairam123/Eaz_AL_TALAB
2. Share the repository
3. Clone it on other machines
4. Collaborate with others

## Summary

1. ✅ Create Personal Access Token at: https://github.com/settings/tokens
2. ✅ Copy the token (starts with `ghp_`)
3. ✅ Run: `git push -u origin main`
4. ✅ Username: `rsairam123`
5. ✅ Password: `paste_token_here`
6. ✅ Mac password: Your Mac login password (if asked)

**That's it!** Your code will be pushed to GitHub! 🚀