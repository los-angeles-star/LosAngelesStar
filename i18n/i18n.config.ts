import { datetimeFormats } from "./datetime-formats"

export default defineI18nConfig(() => ({
    legacy: true,
    fallbackLocale: 'en',
    datetimeFormats,
}))