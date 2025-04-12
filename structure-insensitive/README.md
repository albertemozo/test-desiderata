# Structure-insensitive

The provided class depends on a collaborator.

1. Run the test, it passes.
2. Refactor the class to prevent calling the collaborator twice.
3. Run the test, it fails.

The test is coupled to the implementation.