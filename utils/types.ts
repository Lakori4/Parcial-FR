

export type PhoneAPI = {
  is_valid: boolean,
  format_international: string
  format_e164: string
  country: string
} 

export type Data = {
  tel: PhoneAPI,
  country: string,
}