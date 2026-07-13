# Git Workflow

This guide explains the standard Git and GitHub workflow used for the Archive project.

All project development must be done through feature branches. Changes are merged into the `develop` branch only through Pull Requests.

For branch naming, commit messages, repository policies, and workflow requirements, refer to **Git Workflow Rules**.

---

# Prerequisites

Before you begin, ensure you have:

- A GitHub account
- Git installed on your computer
- Access to the main repository as a collaborator

---

# 1. Clone the Repository

Clone the main repository.

```bash
git clone https://github.com/Ajah-Kob/Archive.git
cd Archive
```

---

# 2. Verify the Remote

Verify that your local repository points to the main repository.

```bash
git remote -v
```

Example:

```text
origin  https://github.com/Ajah-Kob/Archive.git (fetch)
origin  https://github.com/Ajah-Kob/Archive.git (push)
```

---

# Development Workflow

Follow these steps whenever you work on a task.

## Step 1 — Update Your Local Repository

Before creating a new branch, update your local `develop` branch.

```bash
git checkout develop
git pull origin develop
```

---

## Step 2 — Create a Feature Branch

Create a new branch from the updated `develop` branch.

```bash
git checkout -b feature/your-task-name
```

Example:

```text
feature/login-page
feature/calendar-ui
fix/group-validation
docs/update-workflows
```

> See **Git Workflow Rules** for branch naming conventions.

---

## Step 3 — Develop Your Feature

Implement your assigned task.

Save your work regularly.

```bash
git add .
git commit -m "Your commit message"
```

> Follow the commit message conventions described in **Git Workflow Rules**.

---

## Step 4 — Push Your Branch

Push your branch to GitHub.

```bash
git push --set-upstream origin feature/your-task-name
```

Subsequent pushes only require:

```bash
git push
```

---

## Step 5 — Create a Pull Request

Open a Pull Request.

Configuration:

- Base Branch: `develop`
- Compare Branch: Your feature branch

Wait for review.

If changes are requested:

- Make the required changes.
- Commit them.
- Push again.

The Pull Request updates automatically.

---

## Step 6 — Merge

After approval:

- Merge the Pull Request.
- Delete the feature branch.
- Update your local repository.

```bash
git checkout develop
git pull origin develop
```

---

# Starting Another Task

Repeat the workflow.

1. Update `develop`.

```bash
git checkout develop
git pull origin develop
```

2. Create a new feature branch.

```bash
git checkout -b feature/new-feature
```

Never reuse an old feature branch.

---

# Using Forks

Forking is **not part of the team's normal workflow.**

Forks should only be used for:

- Experimentation
- Personal testing
- Learning
- Prototyping

Any production-ready work should eventually be implemented in a feature branch before creating a Pull Request.

---

# Workflow Summary

1. Clone the repository.
2. Update `develop`.
3. Create a feature branch.
4. Develop the feature.
5. Commit changes.
6. Push the branch.
7. Create a Pull Request.
8. Merge after approval.
9. Delete the completed branch.
10. Repeat.

---

# Related Documentation

- Git Workflow Rules
- Pull Request Guide
- Coding Standards
- Project Structure