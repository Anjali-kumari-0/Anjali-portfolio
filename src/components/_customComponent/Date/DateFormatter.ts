// ==============================
// 📌 TYPES
// ==============================

export type DateFormatType =
  | 'relative' // [example]
  | 'relativeFull'
  | 'smart'
  | 'todayFriendly'
  | 'yesterdayWithTime'
  | 'dayOnly'
  | 'dateWithDayShort'
  | 'friendly'

  // Standard
  | 'dd/MM/yyyy'
  | 'MM/dd/yyyy'
  | 'yyyy/MM/dd'
  | 'dd-MM-yyyy'
  | 'yyyy-MM-dd'
  | 'dd MMM yyyy'
  | 'MMM dd, yyyy'
  | 'dd MMM time12h'
  | 'dd MMM'

  // Time
  | 'time12h'
  | 'time24h'
  | 'timeWithSeconds'
  | 'timeWithZone'

  // ISO / Technical
  | 'isoFull'
  | 'timestamp'
  | 'unix'
  | 'utcString'

  // Business
  | 'monthYear'
  | 'quarter'
  | 'weekNumber'
  | 'financialYear'

  // Compact
  | 'tiny'
  | 'superTiny'
  | 'badge'
  | 'chatFormat'

  // Range
  | 'dateRange'
  | 'dateTimeRange'
  | 'relativeRange'

  // Locale
  | 'localeAuto'
  | 'indiaFormat'
  | 'usFormat';


// ==============================
// 📌 MAIN FUNCTION
// ==============================

export function formatDate(
  dateInput?: string | number | Date | null,
  format: DateFormatType = 'dd MMM yyyy',
  options?: {
    endDate?: string | number | Date; // for range
    locale?: string;
  }
): string {
  if (!dateInput) return 'Date not available';

  const date = new Date(dateInput);
  const now = new Date();
  const locale = options?.locale || navigator.language;

  // ==============================
  // 🧠 HELPER FUNCTIONS
  // ==============================

  const diffInSeconds = (d: Date) =>
    Math.floor((now.getTime() - d.getTime()) / 1000);

  const isToday = (d: Date) =>
    d.toDateString() === now.toDateString();

  const isYesterday = (d: Date) => {
    const y = new Date();
    y.setDate(now.getDate() - 1);
    return d.toDateString() === y.toDateString();
  };

  const formatIntl = (opts: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat(locale, opts).format(date);

  const getWeekNumber = (d: Date) => {
    const temp = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const dayNum = temp.getUTCDay() || 7;
    temp.setUTCDate(temp.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(temp.getUTCFullYear(), 0, 1));
    return Math.ceil((((temp.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  };

  const getQuarter = (d: Date) =>
    `Q${Math.floor(d.getMonth() / 3) + 1} ${d.getFullYear()}`;

  const getFinancialYear = (d: Date) => {
    const year = d.getFullYear();
    return d.getMonth() >= 3
      ? `FY ${year}-${(year + 1).toString().slice(2)}`
      : `FY ${year - 1}-${year.toString().slice(2)}`;
  };

  // ==============================
  // ⏱️ RELATIVE TIME
  // ==============================

  const getRelativeTime = (d: Date) => {
    const diff = diffInSeconds(d);

    if (diff < 10) return 'just now';
    if (diff < 60) return `${diff} seconds ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;
    if (diff < 2592000) return `${Math.floor(diff / 604800)} weeks ago`;
    if (diff < 31536000) return `${Math.floor(diff / 2592000)} months ago`;

    return `${Math.floor(diff / 31536000)} years ago`;
  };

  // ==============================
  // 🎯 SWITCH
  // ==============================

  switch (format) {
    // 🔥 Relative
    case 'relative':
      return getRelativeTime(date);

    case 'relativeFull':
      if (isToday(date)) return 'today';
      if (isYesterday(date)) return 'yesterday';
      return getRelativeTime(date);

    case 'todayFriendly':
      if (isToday(date)) return 'Today';
      if (isYesterday(date)) return 'Yesterday';
      return formatIntl({ day: '2-digit', month: 'short', year: 'numeric' });

    case 'smart':
      if (isToday(date)) return formatIntl({ hour: '2-digit', minute: '2-digit' });
      if (isYesterday(date)) return 'Yesterday';
      if (diffInSeconds(date) < 604800)
        return formatIntl({ weekday: 'long' });
      return formatIntl({ day: '2-digit', month: 'short' });

    case 'yesterdayWithTime':
      if (isYesterday(date))
        return `Yesterday at ${formatIntl({ hour: '2-digit', minute: '2-digit' })}`;
      return formatIntl({ day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });

    case 'dayOnly':
      return formatIntl({ weekday: 'long' });

    case 'dateWithDayShort':
      return formatIntl({ weekday: 'short', day: '2-digit', month: 'short' });

    case 'friendly':
      return formatIntl({
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
      });

    // 📅 Standard
    case 'dd/MM/yyyy':
      return formatIntl({ day: '2-digit', month: '2-digit', year: 'numeric' });

    case 'MM/dd/yyyy':
      return new Intl.DateTimeFormat('en-US').format(date);

    case 'yyyy/MM/dd':
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

    case 'dd-MM-yyyy':
      return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

    case 'yyyy-MM-dd':
      return date.toISOString().split('T')[0];

    case 'dd MMM yyyy':
      return formatIntl({ day: '2-digit', month: 'short', year: 'numeric' });

    case 'MMM dd, yyyy':
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }).format(date);

    // ⏰ Time
    case 'time12h':
      return formatIntl({ hour: '2-digit', minute: '2-digit', hour12: true });

    case 'time24h':
      return formatIntl({ hour: '2-digit', minute: '2-digit', hour12: false });

    case 'timeWithSeconds':
      return formatIntl({ hour: '2-digit', minute: '2-digit', second: '2-digit' });

    case 'timeWithZone':
      return formatIntl({
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
      });

    // 🌍 Technical
    case 'isoFull':
      return date.toISOString();

    case 'timestamp':
      return String(date.getTime());

    case 'unix':
      return String(Math.floor(date.getTime() / 1000));

    case 'utcString':
      return date.toUTCString();

    // 📊 Business
    case 'monthYear':
      return formatIntl({ month: 'short', year: 'numeric' });

    case 'quarter':
      return getQuarter(date);

    case 'weekNumber':
      return `Week ${getWeekNumber(date)}`;

    case 'financialYear':
      return getFinancialYear(date);

    // 📱 Compact
    case 'tiny':
      return formatIntl({ day: '2-digit', month: 'short' });

    case 'superTiny':
      return formatIntl({ day: '2-digit', month: '2-digit' });

    case 'badge':
      return formatIntl({ month: 'short', day: '2-digit' });

    case 'chatFormat':
      if (isToday(date))
        return formatIntl({ hour: '2-digit', minute: '2-digit' });
      if (isYesterday(date)) return 'Yesterday';
      return formatIntl({ weekday: 'short' });

    // 🗓️ Range
    case 'dateRange':
      if (!options?.endDate) return 'End date required';
      return `${formatDate(date, 'dd MMM')} – ${formatDate(options.endDate, 'dd MMM')}`;

    case 'dateTimeRange':
      if (!options?.endDate) return 'End date required';
      return `${formatDate(date, 'dd MMM time12h')} – ${formatDate(options.endDate, 'time12h')}`;

    case 'relativeRange':
      return 'Last 7 days';

    // 🌐 Locale
    case 'localeAuto':
      return date.toLocaleString();

    case 'indiaFormat':
      return formatIntl({ day: '2-digit', month: 'short', year: 'numeric' });

    case 'usFormat':
      return new Intl.DateTimeFormat('en-US').format(date);

    default:
      return date.toISOString();
  }
}