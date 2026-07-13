# Progress Monitoring Workflow

## Purpose

This workflow describes how authorized users monitor the progress of capstone groups throughout the capstone lifecycle.

The system provides role-based progress monitoring to help coordinators oversee class sections and advisers track the progress of their assigned groups.

---

# Actors

* Coordinator
* Adviser

---

# Preconditions

Before this workflow begins:

* The user is authenticated.
* The user has the appropriate role.
* At least one capstone group exists within the system.

---

# Workflow

## Part A – Coordinator Progress Monitoring

1. The Coordinator navigates to the **Progress Monitoring** page.

2. The system displays all capstone groups within the Coordinator's assigned section.

3. The Coordinator selects a capstone group.

4. The system displays the group's progress, including:

   * Current milestone
   * Chapter status
   * Submission history
   * Number of submission versions
   * Adviser assignment
   * Defense status

5. The Coordinator monitors the group's progress.

---

## Part B – Adviser Progress Monitoring

1. The Adviser navigates to the **Progress Monitoring** page.

2. The system displays all assigned advisee groups.

3. The Adviser selects a capstone group.

4. The system displays the group's progress, including:

   * Current milestone
   * Chapter status
   * Submission history
   * Number of submission versions
   * Defense status

5. The Adviser monitors the group's progress.

---

# Postconditions

After successful completion:

* The requested progress information is displayed.
* No capstone data is modified.

---

# Alternate Flows

## AF-01: No Assigned Groups

If the Adviser has no assigned capstone groups, the system displays an empty state indicating that no groups are currently assigned.

---

## AF-02: No Groups in Section

If no capstone groups exist within the Coordinator's assigned section, the system displays an empty state indicating that no groups are available.

---

# Business Notes

* Coordinators may monitor only the capstone groups within their assigned section.
* Advisers may monitor only their assigned advisee groups.
* Progress monitoring is read-only and does not modify capstone data.
* Progress information is automatically updated as students complete milestones, submit chapters, and receive approvals.

---

# Related Workflows

* Section Management Workflow
* Group Management Workflow
* Capstone 1 Workflow
* Capstone 2 Workflow
* Adviser Review Workflow
* Proposal Defense Workflow
* Final Defense Workflow

---

# Result

Authorized users can monitor the progress of capstone groups according to their assigned roles, allowing them to track milestones, submissions, approvals, and defense progress throughout the capstone lifecycle.
