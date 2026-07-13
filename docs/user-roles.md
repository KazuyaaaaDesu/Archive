# User Roles

This document describes the responsibilities, permissions, and limitations of each user role in **Archive**, the Capstone Management System. These roles define the system's access control and determine which features are available to each user.

---

# Student

## Description

Students are the primary users of the system. They work in capstone groups and use Archive to submit project documents, monitor their progress, and communicate with their assigned adviser.

## Responsibilities

* Create or join a capstone group.
* Submit capstone chapters and required documents.
* View submission status and revision history.
* Respond to adviser feedback.
* Upload revised documents.
* View schedules, announcements, and notifications.

## Restrictions

Students cannot:

* Review or approve submissions.
* Modify submissions that have already been approved.
* Access other student groups.
* Manage system settings or user accounts.

---

# Adviser

## Description

Advisers are faculty members assigned to guide specific capstone groups throughout the project lifecycle.

## Responsibilities

* Review assigned student submissions.
* Annotate submitted documents.
* Request revisions.
* Approve submitted chapters.
* Monitor the progress of assigned groups.
* Communicate feedback to students.

## Restrictions

Advisers cannot:

* Access groups that are not assigned to them.
* Modify coordinator or program settings.
* Manage user accounts.

---

# Coordinator

## Description

Coordinators manage and oversee the operational aspects of the capstone program.

## Responsibilities

* Manage student groups.
* Assign advisers.
* Monitor submissions across all groups.
* Manage defense schedules.
* Generate reports.
* Manage announcements and templates.
* Monitor overall capstone progress.

## Restrictions

Coordinators do not directly review or annotate student chapters unless required by the workflow.

---

# Program Chair

## Description

The Program Chair oversees the capstone program from an administrative perspective to ensure compliance with academic policies and program objectives.

## Responsibilities

* Monitor the overall progress of capstone projects.
* Review reports and analytics.
* View submissions and project statuses.
* Monitor adviser and coordinator activities.

## Restrictions

The Program Chair does not directly review, annotate, or approve student chapter submissions.

---

# Panelist

## Description

Panelists evaluate student capstone projects during proposal and final defenses.

## Responsibilities

* Review defense materials.
* Evaluate student presentations.
* Record evaluation results.
* Provide comments and recommendations.

## Restrictions

Panelists cannot:

* Review regular chapter submissions outside scheduled defenses.
* Modify student documents.
* Manage groups or schedules.

---

# Permission Summary

| Feature                 | Student | Adviser | Coordinator | Program Chair | Panelist |
| ----------------------- | :-----: | :-----: | :---------: | :-----------: | :------: |
| View Dashboard          |    ✅    |    ✅    |      ✅      |       ✅       |     ✅    |
| Create Group            |    ✅    |    ❌    |      ❌      |       ❌       |     ❌    |
| Submit Chapters         |    ✅    |    ❌    |      ❌      |       ❌       |     ❌    |
| Upload Revisions        |    ✅    |    ❌    |      ❌      |       ❌       |     ❌    |
| View Own Progress       |    ✅    |    ✅    |      ✅      |       ✅       |     ✅    |
| Review Chapters         |    ❌    |    ✅    |      ❌      |       ❌       |     ❌    |
| Annotate Documents      |    ❌    |    ✅    |      ❌      |       ❌       |     ❌    |
| Request Revisions       |    ❌    |    ✅    |      ❌      |       ❌       |     ❌    |
| Approve Chapters        |    ❌    |    ✅    |      ❌      |       ❌       |     ❌    |
| Manage Student Groups   |    ❌    |    ❌    |      ✅      |       ❌       |     ❌    |
| Assign Advisers         |    ❌    |    ❌    |      ✅      |       ❌       |     ❌    |
| Manage Defense Schedule |    ❌    |    ❌    |      ✅      |       ❌       |     ❌    |
| View Reports            |    ❌    | Limited  |      ✅      |       ✅       |  Limited |
| Evaluate Defenses       |    ❌    |    ❌    |      ❌      |       ❌       |     ✅    |
| Manage System Settings  |    ❌    |    ❌    |      ✅      |       ❌       |     ❌    |

---

# Role Hierarchy

The system follows a role-based access control (RBAC) model.

* **Students** have access only to their own group and submissions.
* **Advisers** have access only to groups assigned to them.
* **Panelists** have access only to assigned defense evaluations.
* **Coordinators** manage the operational workflow across all groups.
* **Program Chairs** have read-only oversight of the entire capstone program and institutional reports.

When implementing new features, developers should always verify which roles are authorized to access or modify the associated resources.