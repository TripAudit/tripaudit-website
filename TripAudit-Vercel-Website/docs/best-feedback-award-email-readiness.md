# Best Feedback Award: separate application recommendation

**Review only — not implemented, not open for entries.** 2 November 2026.
This marketing PR does not modify the review application, its API, databases,
provider calls or security controls.

## Read-only source verification

Application main inspected at `41df264073e34119f58e919fdd423e278249a80d`:

- [OrionPilotReview.tsx](https://github.com/TripAudit/tripaudit-founder-mvp/blob/41df264073e34119f58e919fdd423e278249a80d/app/components/OrionPilotReview.tsx): feedback UI has a required rating and optional comment, no optional email or participation-consent field. Submission sends only accepted review reference, rating and comment.
- [Feedback route](https://github.com/TripAudit/tripaudit-founder-mvp/blob/41df264073e34119f58e919fdd423e278249a80d/app/api/orion/feedback/route.ts): strict permitted keys are `acceptedReviewReference`, `rating`, `comment`; unknown fields are rejected. RPC receives session hash, accepted review reference, rating and comment only.

Therefore a supported optional email-entry flow is absent in the inspected
application source. A comment box is not a substitute for a consent-aware contact
field. This was source inspection, not an end-to-end production submission. No
review, feedback submission, email collection or database query was performed.

## Proposed separate implementation, requiring its own authorization

1. Keep ordinary feedback available without award participation or an email.
   Positive and negative ratings must have identical eligibility. Do not silently
   turn every feedback submission into an entry or use email appearance in free
   text as consent.
2. Add a clearly optional award participation control with unchecked, explicit
   consent and a separate optional email field. Explain organizer, sole purpose
   (award administration/contact), use, recipients, retention, withdrawal/deletion
   route and consequences before consent. Link approved award terms and privacy
   notice. No bundled marketing consent or prechecked boxes.
3. Finalize the minimum authorized application-side storage design before coding.
   Keep contact data separate from report content, restricted to authorized award
   administration, with server-side authorization and no public/client-wide read.
   Do not put email in URLs, analytics, general logs, model inputs or public output.
   Never rely solely on hiding UI elements for access control.
4. Validate email and consent server-side. Bind participation to the correct
   eligible accepted feedback without weakening current origin, ownership,
   duplicate-submission, payload and access controls. Define how a participant can
   correct contact details or withdraw without deleting unrelated review data.
5. Agree and document a bounded retention period and automated deletion process,
   with separate treatment of minimum legally required award/accounting records.
   Restrict exports and backup access; document deletion limitations and a contact
   channel. Avoid collecting identity documents unless a separately reviewed need
   exists; use minimal eligibility checks.
6. Test feedback without email; email without consent; invalid email; withdrawal;
   duplicate/replayed/cross-session entries; unauthorized reads; safe logging;
   deletion and retention; and equal positive/negative eligibility. Verify the
   real approved UI-to-storage flow separately before any marketing activation.

No application changes, new API, database, tracking system, migration or security
setting are created by this recommendation. Founder and appropriate privacy/legal
review must resolve policy facts before implementation. Do not activate the banner
until that work, the award terms, visual QA and explicit release approval are ready.
