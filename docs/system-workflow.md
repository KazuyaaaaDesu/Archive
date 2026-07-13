# System Workflow

This document describes the primary workflows of **Archive**, the Capstone Management System. It outlines how users interact with the system throughout the capstone lifecycle, from group formation to the completion of the project.

---

# Overview

The capstone workflow consists of several stages:

1. Group Formation
2. Adviser Assignment
3. Chapter Submission
4. Document Review
5. Revision Process
6. Chapter Approval
7. Defense Scheduling
8. Defense Evaluation
9. Project Completion

Each stage involves different user roles and permissions.

---

# 1. Group Formation

### Actors

* Student
* Coordinator

### Workflow

1. A student creates a capstone group.
2. Other students join the group through an invitation or approval process.
3. The coordinator verifies the group information.
4. Once verified, the group becomes active.

### Result

An official capstone group is created and can begin the capstone process.

---

# 2. Adviser Assignment

### Actor

* Coordinator

### Workflow

1. The coordinator assigns an adviser to a capstone group.
2. The assigned adviser gains access to the group's dashboard and submissions.
3. Students are notified of their assigned adviser.

### Result

The adviser can begin mentoring and reviewing the group's work.

---

# 3. Chapter Submission

### Actor

* Student

### Workflow

1. The group uploads a chapter document.
2. The system validates the uploaded file.
3. The submission is recorded.
4. The adviser receives a notification.

### Result

The chapter enters the review queue.

---

# 4. Chapter Review

### Actor

* Adviser

### Workflow

1. The adviser opens the submitted chapter.
2. The adviser reviews the document.
3. The adviser may annotate sections of the document.
4. The adviser decides whether to approve the chapter or request revisions.

### Possible Outcomes

* Approved
* Revision Requested

---

# 5. Revision Process

### Actors

* Adviser
* Student

### Workflow

1. The adviser submits revision comments.
2. Students receive a notification.
3. Students update the document.
4. Students upload a revised version.
5. The adviser reviews the revised submission.

This process repeats until the adviser approves the chapter.

---

# 6. Chapter Approval

### Actor

* Adviser

### Workflow

1. The adviser approves the chapter.
2. The chapter status changes to **Approved**.
3. Approved chapters become read-only.
4. Students may proceed to the next chapter.

### Result

The submission is finalized.

---

# 7. Defense Scheduling

### Actor

* Coordinator

### Workflow

1. Eligible groups are selected.
2. The coordinator schedules the defense.
3. The schedule includes:

   * Date
   * Time
   * Venue
   * Assigned panelists
4. Students, advisers, and panelists receive notifications.

### Result

The defense schedule becomes available to all involved users.

---

# 8. Defense Evaluation

### Actors

* Panelist
* Adviser

### Workflow

1. Panelists access the assigned defense schedule.
2. During the defense, panelists record scores, comments, and recommendations.
3. Evaluation results are submitted.
4. The system stores all evaluation records.

### Result

The defense outcome is recorded for future reference.

---

# 9. Project Completion

### Actors

* Coordinator
* Program Chair

### Workflow

1. All required chapters are approved.
2. Defense evaluation is completed.
3. Final project requirements are verified.
4. The project status is marked as **Completed**.
5. Reports become available for coordinators and the program chair.

### Result

The capstone project is officially completed.

---

# Submission State Flow

```
Draft
   │
   ▼
Submitted
   │
   ▼
Under Review
   │
   ├───────────────┐
   │               │
   ▼               ▼
Approved     Revision Requested
                    │
                    ▼
            Revised Submission
                    │
                    ▼
              Under Review
```

---

# User Interaction Summary

| Workflow Stage     | Student |  Adviser | Coordinator | Program Chair | Panelist |
| ------------------ | :-----: | :------: | :---------: | :-----------: | :------: |
| Group Formation    |    ✅    |     ❌    |      ✅      |       ❌       |     ❌    |
| Adviser Assignment |    ❌    |     ❌    |      ✅      |       ❌       |     ❌    |
| Chapter Submission |    ✅    |     ❌    |      ❌      |       ❌       |     ❌    |
| Chapter Review     |    ❌    |     ✅    |      ❌      |       ❌       |     ❌    |
| Revision Process   |    ✅    |     ✅    |      ❌      |       ❌       |     ❌    |
| Chapter Approval   |    ❌    |     ✅    |      ❌      |       ❌       |     ❌    |
| Defense Scheduling |    ❌    |     ❌    |      ✅      |       ❌       |     ❌    |
| Defense Evaluation |    ❌    | Optional |      ❌      |       ❌       |     ✅    |
| Project Completion |    ❌    |     ❌    |      ✅      |       ✅       |     ❌    |

---

# Business Rules

* A chapter can only have one active status at a time.
* Only the assigned adviser may review and approve a group's chapter submissions.
* Students cannot modify approved chapters.
* Every revision request must include feedback.
* Every revised submission creates a new submission version to preserve revision history.
* Only coordinators can assign advisers and create defense schedules.
* Panelists may only evaluate groups assigned to their defense schedule.
* Program Chairs have read-only access to reports and overall project progress.
