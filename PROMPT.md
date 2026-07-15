# Task: Implement Welcome Page Join Workflow

## Objective

Implement the complete **Welcome Page onboarding workflow** where newly authenticated users choose whether to join the system as a **Faculty Member** or a **Student**.

The implementation should closely follow the provided Figma designs, existing project architecture, and component organization.

---

# Workflow

## Initial State

- After a user successfully logs in, they are redirected to the **Welcome Page**.
- At this point, the user has not yet been assigned a role within the system.
- The Welcome Page presents two available actions:
  - **Join as Faculty**
  - **Join as Student**

---

## Join as Faculty

When the user selects **Join as Faculty**:

1. Display the **Join Faculty Modal**.
2. Prompt the user to enter a valid faculty invitation code.
3. The invitation code submission should be implemented as the entry point of the workflow.
4. Validation and backend integration can remain as placeholders if they are not yet implemented.
5. The modal should support:
   - Input validation
   - Submit action
   - Cancel/Close action

> **Note**
>
> A complete Faculty onboarding workflow has **not yet been documented**. Implement only the UI flow and prepare the component structure so backend integration can be added later.

---

## Join as Student

When the user selects **Join as Student**:

1. Display the **Join Section Modal**.
2. Prompt the user to enter a section invitation/join code.
3. After submitting the code, the remaining workflow follows the existing Section Management workflow.

Refer to:

> `workflow/02-section-management.md`

for the complete student joining process.

---

# Implementation Requirements

## Modal Behavior

- **Do not implement the Join Faculty or Join Student flow as separate pages or routes.**
- The **Welcome Page must remain the active page** while the modal is displayed.
- Both modals should be controlled using React state (e.g., `useState`) within the Welcome Page.
- Clicking **Join as Faculty** should open the **Join Faculty Modal**.
- Clicking **Join as Student** should open the **Join Section Modal**.
- Closing a modal should simply update the state and return the user to the Welcome Page without any navigation.

The implementation should follow a controlled modal pattern similar to:

```tsx
const [activeModal, setActiveModal] = useState<
  "faculty" | "student" | null
>(null);
```

---

## Component Organization

Create all Welcome-related reusable components inside:

```text
/components/welcome/
```

Examples include (but are not limited to):

```text
/components/welcome/
│── JoinFacultyModal.tsx
│── JoinSectionModal.tsx
│── InvitationCodeInput.tsx
│── ModalHeader.tsx
│── ModalFooter.tsx
│── JoinOptionCard.tsx
```

Use reusable components whenever possible instead of duplicating UI between the two modals.

---

## General Requirements

- Follow the provided Figma designs as closely as possible.
- Create reusable and modular components.
- Keep styling consistent with the rest of the application.
- Ensure both modals have consistent spacing, typography, colors, and interactions.
- Make the implementation responsive where applicable.
- Reuse existing UI components if they already exist within the project.

---

## Backend

- Backend functionality does **not** need to be fully implemented.
- Placeholder callbacks, mock handlers, or TODO comments are acceptable where backend functionality has not yet been developed.
- Focus on building a clean and reusable UI architecture that can easily integrate with the backend later.

---

# Student Join Workflow Reference

The Student Join modal should prepare for the workflow described in:

```text
workflow/02-section-management.md
```

---

# Figma Designs

## Join Faculty Modal

@https://www.figma.com/design/CeB1fsgwQxvh7CnSzSsriw/ARCHIVE-PROTOTYPE-UI?node-id=743-3613&m=dev

---

## Join Faculty Modal Components

@https://www.figma.com/design/CeB1fsgwQxvh7CnSzSsriw/ARCHIVE-PROTOTYPE-UI?node-id=747-5794&m=dev

---

## Join Section Modal

@https://www.figma.com/design/CeB1fsgwQxvh7CnSzSsriw/ARCHIVE-PROTOTYPE-UI?node-id=743-3975&m=dev

---

## Join Section Modal Components

@https://www.figma.com/design/CeB1fsgwQxvh7CnSzSsriw/ARCHIVE-PROTOTYPE-UI?node-id=747-5661&m=dev