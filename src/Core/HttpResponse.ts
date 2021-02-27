type IHttpResponse = {
  statusCode: number;
  body: unknown;
};

class HttpResponse<IHttpResponse> {}
export { HttpResponse };
