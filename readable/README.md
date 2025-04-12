# Readable

This is a very simple test, and its intention is quite clear.

But by looking at the test... can you tell if the taxes are an amount or a percentage?

An amount like 1000 would make it much clearer.
An amount like 127.37 would make it harder to read.

Now try to apply some refactoring that is usually recommended for production code:
extract the magic number into a constant.

Did it make the test clearer? Or the opposite?

