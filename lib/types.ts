// Define a type for Zod formatted errors (treeified)
export type ZodFormattedErrors = {
  [field: string]: string[] | ZodFormattedErrors; // recursive for nested objects
};

export type ActionResponse = {
  success: boolean
  message: string,
  errors?: Record<string, string[]> | ZodFormattedErrors
  error?: string,
  data?: string | Array<object> | object | number,
}