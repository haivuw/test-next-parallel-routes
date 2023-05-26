Reproduction: navigate all the way to the final route through next/link, then F5, then navigate back in browser history. At this point, the final route should be dismissed, but it's not. Maybe I'm doing it wrong?

Same thing even if I don't nest the routes: https://github.com/haivuw/test-next-parallel-routes/tree/same-level

My conclusion is that navigating between parallel routes doesn't work after browser refresh. It only work properly when you navigate from a parent route to its child parallel route.
