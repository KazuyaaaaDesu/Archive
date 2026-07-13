# Pull Request Guidelines

This document outlines the standard process for creating and submitting Pull Requests (PRs) for the Archive project.

---

# Before Creating a Pull Request

Before opening a Pull Request, make sure you have:

- Created your feature branch from the latest `develop` branch.
- Completed the assigned feature or bug fix.
- Tested your changes locally.
- Committed your changes with meaningful commit messages.
- Pushed your feature branch to your fork.

Example:

```bash
git push origin feature/calendar-navigation
```

---

# Creating a Pull Request

1. Open the **main repository** on GitHub.
2. Switch to your recently pushed feature branch if necessary.
3. Click **Compare & pull request**.
4. Ensure the Pull Request is configured as follows:

| Repository  | Branch                   |
| ----------- | ------------------------ |
| **Base**    | `develop`                |
| **Compare** | `feature/your-task-name` |

5. Review the changes to ensure only the intended feature or fix is included.
6. Enter a clear Pull Request title and description following the project's Pull Request guidelines.
7. Click **Create pull request**.
8. Wait for code review and address any requested changes before the Pull Request is approved and merged.

---

# Pull Request Description Format

Use the following format **exactly** for every Pull Request.

```text
What I built:
[Short description of what was completed]

Branch:
[your feature branch]

Link:
[paste your GitHub Pull Request URL]
```

### Example

```text
What I built:
Implemented month navigation for the calendar page, including Previous, Next, and Today buttons.

Branch:
feature/calendar-navigation

Link:
https://github.com/your-username/archive/pull/15
```

---

# Pull Request Checklist

Before submitting your Pull Request, verify the following:

- [ ] Branch is up to date with the latest `develop` branch.
- [ ] Code follows the project's coding standards.
- [ ] No unnecessary files were committed.
- [ ] No merge conflicts exist.
- [ ] Project builds and runs successfully.
- [ ] All intended functionality has been tested.
- [ ] Pull Request description follows the required format.

---

# Review Process

1. Submit the Pull Request.
2. Wait for the project maintainer to review your changes.
3. Address any requested revisions.
4. Push additional commits to the same feature branch if changes are requested.
5. Once approved, the Pull Request will be merged into the `develop` branch.

> **Do not merge your own Pull Requests unless you have been given permission by the project maintainer.**
