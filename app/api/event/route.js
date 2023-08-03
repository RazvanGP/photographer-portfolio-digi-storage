export async function GET(request) {
  const message = [{ message: "Hello 1" }, { message: "Hello 2" }];
  return new Response(JSON.stringify(message));
}
