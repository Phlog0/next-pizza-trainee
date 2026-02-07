export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode = 500,
    public details?: unknown
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}
