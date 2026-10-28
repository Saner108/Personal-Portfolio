# WaveWare: Animal Diet and Nutrition Database

Microsoft Access coursework project developed around the Texas State Aquarium's animal diet and nutrition workflows.

## Version

The prepared demo is a **near-final representative copy**, not the actual final submission. The source filename contained "FINAL6.11", but that filename does not establish final-submission status. This is a historical portfolio artifact, not a current aquarium system or animal-care recommendation.

## Download Status

The database file **has not been published**. An employee-name-replaced copy is prepared locally, but the remaining aquarium records are unchanged. Public distribution is on hold pending explicit approval to share that retained real data.

Prepared filename: `WaveWare_NearFinal_Employee_Demo.accdb`.

[SHA-256 checksum for the prepared copy](CHECKSUMS.sha256)

If publication is approved, the database is intended to be distributed as a release attachment rather than included in the website source tree. No database is included in this repository.

## Demo Passwords

| Prompt | Code |
| --- | --- |
| Open the database file | `2710` |
| Manager menu | `1234` |

These codes are intentionally public for this demonstration. They would provide no confidentiality for a future downloadable copy and must not be reused for a real deployment.

## Employee Replacement Scope

- The four employee names were replaced with `Demo Employee01` through `Demo Employee04`.
- Employee IDs and the existing manager/staff roles were preserved.
- Other aquarium records were retained at the project owner's request. **This is not a fully anonymized or fully synthetic dataset.**
- Existing tables, fields, indexes, relationships, queries, forms, reports, macros, and database settings were preserved.
- The original USB database was left unchanged.

## Open a Demo Copy

These steps apply to a separately provided copy; there is no public download yet.

1. Open a working copy of the `.accdb` file in Microsoft Access on Windows.
2. Enter `2710` when prompted for the database password.
3. Begin at the main menu. The **MANAGER DIET ADJUSTMENTS** option uses code `1234`.
4. Review the saved code and macros before enabling active content. Only enable content you trust.

This is an editable database, so changes made while exploring may be saved to your downloaded copy.

## Verification and Limits

Preparation compared all 25 user tables and 69 records against the source, allowing only the eight employee-name fields to change. Saved Access object storage and schema definitions were compared separately. The copied file was also scanned for the original first and last names in decoded database pages, including unused content.

The file-opening password was checked, and the saved manager macro still checks `1234`. These are file-level checks, not a Microsoft Access user-interface test. Navigation, forms, queries, calculations, and reports have **not been tested in native Access after this edit**. No claim of production readiness or clinical accuracy is made.
