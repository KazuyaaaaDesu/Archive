# Section Management Workflow

## Purpose

This workflow describes how a Coordinator creates and manages a class section within Archive. A class section serves as the primary workspace where students are organized before forming capstone groups.

Upon creating a section, the system generates a unique invitation link that students use to join. Students must join a class section before they can access capstone management features.

---

# Actors

- Coordinator
- Student

---

# Preconditions

Before this workflow begins:

- The faculty member has been assigned the Coordinator role.
- The coordinator is authenticated.
- The corresponding class section has not yet been created within Archive.
- Students have already created their Archive accounts.

---

# Workflow

## Part A – Section Creation

1. The Coordinator navigates to the **Section Management** page.

2. The Coordinator creates a new class section by entering the required section information (e.g., academic year, section code, semester, and other required details).

3. The system validates the entered information.

4. The system creates the class section.

5. The system generates a unique invitation link for the newly created section.

6. The Coordinator shares the invitation link with students belonging to that academic section.

---

## Part B – Student Joins Section

1. A student opens the invitation link.

2. The system verifies the invitation.

3. The student confirms the request to join the section.

4. The system adds the student to the class section.

5. The student gains access to section-specific features.

6. The student may now create or join a capstone group.

---

# Postconditions

After successful completion:

- The class section exists within Archive.
- Students become members of the class section.
- Students gain access to capstone management features.
- Students become eligible to create or join capstone groups.

---

# Alternate Flows

## AF-01: Section Already Exists

If the coordinator attempts to create a section that already exists within Archive, the system prevents duplicate creation and informs the coordinator.

---

## AF-02: Invalid Invitation Link

If a student accesses an invalid, expired, or revoked invitation link, the system denies the request and informs the student that the invitation is no longer valid.

---

## AF-03: Student Already Joined a Section

If a student already belongs to an active class section, the system prevents the student from joining another section.

---

## AF-04: Student Already Belongs to the Section

If the student is already a member of the selected class section, the system informs the student and no changes are made.

---

# Business Notes

- Only Coordinators may create and manage class sections.
- Each class section has a unique invitation link.
- Students may belong to only one active class section at a time.
- Students must join a class section before accessing capstone management features.
- Students who have not joined a class section may only access the Capstone Repository and account-related features.
- Creating a class section does not automatically create capstone groups.
- Group creation is handled separately in the **Group Management Workflow**.

---

# Result

A class section is successfully created within Archive, students join the section through the generated invitation link, and they become eligible to create or join capstone groups.
