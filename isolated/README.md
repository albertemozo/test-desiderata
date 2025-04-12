# Isolated

We provide a test suite with two cases.

1. Run both tests, they pass.
2. Run just the second test, it fails.

The second test is depending on the execution of the first one to work, because they share global state.

Try and refactor the tests by removing the shared state, and make them independent.