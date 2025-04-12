# Deterministic

The provided class calculates a deadline depending on the current date and a few other parameters.

The test will pass if you run them during the week, but fail if you run them on the weekend.

There's another hidden caveat. Run the tests a few times and see what happens.

Depending on the system clock, the test will pass or fail depending on the moment in a millisecond you run it.

This is a common problem that has a common solution: introducing a clock abstraction.

You can use the provided `clock.ts` to replace the direct dependency on the system clock with a collaborator you
can replace with a test double.