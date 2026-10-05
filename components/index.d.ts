import * as React from "react";

/** Available as the global `KenosUI` when loaded with a <script> tag. */
export as namespace KenosUI;

/** Library version. */
export declare const version: string;

/** The built-in Lucide icons. */
export type IconName = "play" | "square" | "rotate-cw" | "rotate-ccw" | "pause" | "snowflake" | "trash" | "pencil" | "copy" | "check" | "x" | "plus" | "minus" | "chevron-down" | "chevron-right" | "chevron-left" | "chevron-up" | "chevrons-up-down" | "arrow-up" | "arrow-down" | "search" | "settings" | "terminal" | "file-text" | "camera" | "hard-drive" | "network" | "server" | "box" | "monitor" | "cpu" | "memory-stick" | "layers" | "folder" | "upload" | "download" | "refresh-cw" | "ellipsis" | "ellipsis-vertical" | "log-out" | "user" | "shield" | "info" | "circle-alert" | "triangle-alert" | "circle-check" | "circle-x" | "external-link" | "key" | "lock" | "globe" | "database" | "cloud" | "sun" | "moon" | "funnel" | "list" | "layout-grid" | "activity" | "clock" | "tag" | "power" | "eye" | "eye-off" | "link" | "menu" | "house" | "folder-kanban" | "cable" | "panel-left";

/** Colour palette. `primary` = black (white in dark mode), `accent` = red. */
export type Palette = "primary" | "accent";
export type StatusPalette = Palette | "info" | "success" | "warning" | "error";
export type ControlSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight. Default "solid". */
  variant?: "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";
  /** Height 24–64px (space-6 … space-16). Default "md" (40px). */
  size?: ControlSize;
  /** Default "primary" (black). "accent" (red) for the one main or destructive action. */
  palette?: Palette;
  /** Square button: pass an icon as the only child and an aria-label. */
  iconOnly?: boolean;
  /** Render as another element, e.g. "a". */
  as?: string;
  /** Shows a spinner and disables the button. Keeps the width unless `loadingText` is set. */
  loading?: boolean;
  loadingText?: React.ReactNode;
  /** Icon name (see Icon.names) or a node, before / after the label. */
  startIcon?: IconName | React.ReactNode;
  endIcon?: IconName | React.ReactNode;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Default "outline". */
  variant?: "outline" | "subtle" | "flushed";
  /** Height 28–64px. Default "md" (40px). */
  size?: ControlSize;
  /** Wraps the input in a field with this label. */
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  /** Shown instead of helperText when `invalid`. */
  errorText?: React.ReactNode;
  invalid?: boolean;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Default "subtle". */
  variant?: "solid" | "subtle" | "outline" | "surface" | "plain";
  /** Default "sm". */
  size?: "xs" | "sm" | "md" | "lg";
  /** Default "primary". */
  palette?: StatusPalette;
}
export declare function Badge(props: BadgeProps): React.ReactElement;

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Default "outline". */
  variant?: "elevated" | "outline" | "subtle";
  /** Padding 16 / 24 / 28px. Default "md". */
  size?: "sm" | "md" | "lg";
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Actions row, usually Buttons. */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): React.ReactElement;

export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Default "info". "error" uses the red accent. */
  status?: "info" | "success" | "warning" | "error" | "neutral";
  /** Default "subtle". */
  variant?: "subtle" | "surface" | "outline" | "solid";
  /** Default "md". */
  size?: "sm" | "md" | "lg";
  title?: React.ReactNode;
  /** Replace the status icon, or `false` to hide it. */
  icon?: React.ReactNode | false;
  children?: React.ReactNode;
}
export declare function Alert(props: AlertProps): React.ReactElement;

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Track 24–48px wide. Default "md". */
  size?: "xs" | "sm" | "md" | "lg";
  /** Checked track colour. Default "primary". */
  palette?: Palette;
  label?: React.ReactNode;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;

export interface ProseProps extends React.HTMLAttributes<HTMLElement> {
  /** Already-rendered, SANITIZED HTML (e.g. from marked + DOMPurify). Use children instead with react-markdown. */
  html?: string;
  /** Wrapper element, e.g. "article". Default "div". */
  as?: string;
  children?: React.ReactNode;
}
/** Layout for rendered Markdown. Elements look exactly like the matching components (h2 = Heading 3xl, table = Table sm/line, ``` = CodeBlock …). */
export declare function Prose(props: ProseProps): React.ReactElement;

/** Options for the remark plugin. */
export interface RemarkKenosUIOptions {
  /** Titles for GitHub alerts. Default (en) { NOTE: "Note", TIP: "Tip", IMPORTANT: "Important", WARNING: "Warning", CAUTION: "Caution" }; follows setLocale(). */
  labels?: Partial<Record<"NOTE" | "TIP" | "IMPORTANT" | "WARNING" | "CAUTION", string>>;
}
/**
 * remark (unified) plugin, no dependencies. Put it AFTER remark-directive.
 * `:::alert{status=warning}` · `:::card{title=".." description=".."}` · `:badge[Text]{palette=success}` ·
 * `::button[Text]{href=".." palette=accent}` and GitHub alerts `> [!NOTE|TIP|IMPORTANT|WARNING|CAUTION]`
 * become kui-alert / kui-card / kui-badge / kui-button elements.
 */
export declare function remarkKenosUI(options?: RemarkKenosUIOptions): (tree: unknown) => void;

/** react-markdown `components` map that renders the kui-* elements with Alert, Card, Badge and Button. */
export declare const markdownComponents: Record<"kui-alert" | "kui-card" | "kui-badge" | "kui-button" | "kui-status" | "kui-tag" | "kui-kbd"
  | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "a" | "code" | "pre" | "kbd" | "blockquote" | "hr" | "table" | "input", React.FC<any>>;

/** Service / instance state. online, running → green · offline, error → red · degraded, starting, stopping → orange · maintenance, frozen → blue · unknown, stopped → grey. */
export type ServiceState = "online" | "offline" | "degraded" | "maintenance" | "unknown" | "stopped" | "running" | "frozen" | "error" | "starting" | "stopping";
export interface StatusProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Default "unknown". Also sets the default label in the current locale (Online, Offline, Running, Stopped, Frozen, Error …). */
  status?: ServiceState;
  /** Override the colour; normally derived from `status`. */
  palette?: StatusPalette | "neutral";
  /** Text size; the dot is 0.64em. Default "md". */
  size?: "sm" | "md" | "lg";
  /** Soft pulse on the dot for live states. Off under prefers-reduced-motion. */
  pulse?: boolean;
  /** Label; defaults to the state word in the current locale. */
  children?: React.ReactNode;
}
/** Coloured dot + label for a service, host or job. */
export declare function Status(props: StatusProps): React.ReactElement;

export interface ProgressProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  value: number;
  /** Default 100. */
  max?: number;
  label?: React.ReactNode;
  /** Right-hand text; default "NN %". `false` hides it. */
  valueText?: React.ReactNode | false;
  /** Fixed colour. Without it the bar colours itself by `thresholds`. */
  palette?: StatusPalette | "neutral";
  /** [warning, critical] in percent. Default [75, 90]: below = black, ≥75 orange, ≥90 red. `false` = always primary. */
  thresholds?: [number, number] | false;
  /** Track height 6 / 8 / 10 / 12px. Default "sm". */
  size?: "xs" | "sm" | "md" | "lg";
  /** "full" = pill track. Default rounded (radius-l1). */
  shape?: "rounded" | "full";
}
/** Usage meter for CPU, RAM, disk, quota. */
export declare function Progress(props: ProgressProps): React.ReactElement;

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  value: React.ReactNode;
  /** Small muted unit after the value, e.g. "ms", "GB", "°C". */
  unit?: React.ReactNode;
  help?: React.ReactNode;
  /** Change vs. previous period. up = green, down = red. */
  trend?: { value: string; direction?: "up" | "down" };
  /** Value 20 / 24 / 30px. Default "md". */
  size?: "sm" | "md" | "lg";
  /** Trend line under the value (ink). */
  sparkline?: number[];
}
/** One metric: label, big tabular value, unit, optional trend. */
export declare function Stat(props: StatProps): React.ReactElement;

export interface TableColumn<Row = any> {
  key: string;
  label: React.ReactNode;
  /** "end" right-aligns (numbers). */
  align?: "start" | "end";
  /** Hide this column in the phone card layout. */
  hideOnMobile?: boolean;
  /** Label shown in the phone card layout (defaults to `label` when it is a string). */
  mobileLabel?: string;
  /** Monospace cell (IPs, ports, hashes, IDs). */
  mono?: boolean;
  width?: string | number;
  render?: (value: any, row: Row) => React.ReactNode;
  sortable?: boolean;
  /** Value used for sorting when it differs from the shown one. */
  sortValue?: (row: Row) => any;
}
export interface TableProps<Row = any> extends Omit<React.TableHTMLAttributes<HTMLTableElement>, "children"> {
  /** "cards" (default): rows become cards when the container is < 34rem. "scroll": always a table, scrolls sideways. */
  responsive?: "cards" | "scroll";
  /** Checkbox column with select-all. Needs `rowKey`. */
  selectable?: boolean;
  selected?: Array<string | number>;
  defaultSelected?: Array<string | number>;
  onSelectedChange?: (keys: Array<string | number>) => void;
  /** Current sort (controlled) — columns need `sortable: true`. Click cycles asc → desc → off. */
  sort?: { key: string; dir: "asc" | "desc" } | null;
  defaultSort?: { key: string; dir: "asc" | "desc" } | null;
  onSortChange?: (sort: { key: string; dir: "asc" | "desc" } | null) => void;
  /** Don't sort locally (server-side sorting); only report `onSortChange`. */
  manualSort?: boolean;
  /** Last column, right-aligned: buttons / a Menu per row. */
  rowActions?: (row: Row) => React.ReactNode;
  /** Shows skeleton rows. */
  loading?: boolean;
  /** Text when `rows` is empty. Default "Keine Einträge". */
  emptyText?: React.ReactNode;
  columns?: TableColumn<Row>[];
  rows?: Row[];
  rowKey?: string;
  caption?: React.ReactNode;
  /** Cell padding 6/8 · 12 · 12/16px. Default "sm" (dense). */
  size?: "sm" | "md" | "lg";
  /** Default "line". */
  variant?: "line" | "outline";
  striped?: boolean;
  /** Row hover. */
  interactive?: boolean;
  stickyHeader?: boolean;
  onRowClick?: (row: Row) => void;
  /** Raw <thead>/<tbody> instead of columns + rows. */
  children?: React.ReactNode;
}
/** Dense data table, tabular numbers, optional mono columns. */
export declare function Table<Row = any>(props: TableProps<Row>): React.ReactElement;

/* ================= Foundations ================= */
export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: IconName;
  /** Default 1em (inherits font size). */
  size?: number | string;
  strokeWidth?: number;
  /** Give it a label only when it stands alone and means something. */
  "aria-label"?: string;
}
/** Lucide line icon (ISC), 24px grid, 2px stroke, currentColor. `Icon.names` lists all names. */
export declare const Icon: ((props: IconProps) => React.ReactElement | null) & { names: IconName[] };

export interface IconButtonProps extends Omit<ButtonProps, "iconOnly" | "children" | "startIcon" | "endIcon"> {
  icon: IconName | React.ReactNode;
  /** Required: the button has no visible text. Also used as tooltip title. */
  "aria-label": string;
}
/** Square icon-only Button, ghost by default. */
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
/** Small ghost button that copies `value` to the clipboard and shows a check for 1.5 s. */
export declare function CopyButton(props: { value: string | (() => string); label?: string }): React.ReactElement;

/* ================= Typography ================= */
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Default "xl". 4xl=h1, 3xl=h2, 2xl=h3, xl=h4, lg=h5, md=h6 (tag follows the size unless `as`). */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}
export declare function Heading(props: HeadingProps): React.ReactElement;
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** "underline" (default, red underline) or "plain" (underline on hover). */
  variant?: "underline" | "plain";
  /** Opens in a new tab and adds an external-link icon. */
  external?: boolean;
}
export declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
/** Inline code. Same look as `code` in Markdown. */
export declare function Code(props: React.HTMLAttributes<HTMLElement>): React.ReactElement;
/** Keyboard key. Same as `:kbd[Ctrl]` in Markdown. */
export declare function Kbd(props: React.HTMLAttributes<HTMLElement>): React.ReactElement;
export declare function Blockquote(props: React.BlockquoteHTMLAttributes<HTMLQuoteElement> & { cite?: React.ReactNode }): React.ReactElement;
export declare function Separator(props: React.HTMLAttributes<HTMLElement> & { orientation?: "horizontal" | "vertical"; variant?: "solid" | "dashed" }): React.ReactElement;
export declare function List(props: React.HTMLAttributes<HTMLElement> & { ordered?: boolean; items?: React.ReactNode[] }): React.ReactElement;
export interface CodeBlockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** The code as text (preferred: the copy button copies exactly this). */
  code?: string;
  /** Shown in the header, e.g. "yaml", "bash". Also sets `language-*` on <code> for a highlighter. */
  language?: string;
  title?: React.ReactNode;
  /** Default true. */
  copyable?: boolean;
  /** "terminal" = always dark (black), for command output. */
  variant?: "default" | "terminal";
  /** Scroll after this height. */
  maxHeight?: number | string;
  /** Extra header buttons. */
  actions?: React.ReactNode;
  /** Built-in highlighting for yaml, json, bash/sh, ini/toml/env, js/ts, python, dockerfile, nix, log, diff, sql. Default true. */
  highlight?: boolean;
  lineNumbers?: boolean;
  /** 1-based line numbers to mark. */
  highlightLines?: number[];
  /** Soft-wrap long lines instead of scrolling. */
  wrap?: boolean;
  children?: React.ReactNode;
}
/** Code with header (title / language) and copy button. Markdown ``` fences render as this. */
export declare function CodeBlock(props: CodeBlockProps): React.ReactElement;
export interface TerminalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  /** e.g. <Status status="online">Verbunden</Status> */
  status?: React.ReactNode;
  actions?: React.ReactNode;
  /** Body height. Default 20rem. */
  height?: number | string;
  /** Mount xterm.js into the ref'd body, or pass text. */
  children?: React.ReactNode;
}
/** Always-dark console frame; the ref points at the body (mount xterm.js there). */
export declare const Terminal: React.ForwardRefExoticComponent<TerminalProps & React.RefAttributes<HTMLDivElement>>;

/* ================= Forms ================= */
export interface FieldProps {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
  invalid?: boolean;
  /** Adds a red * after the label. */
  required?: boolean;
  /** "horizontal" = label left (width var(--field-label-width, 10rem)). */
  orientation?: "vertical" | "horizontal";
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  /** One control; it receives the field's id. */
  children: React.ReactElement;
}
/** Label + control + helper/error text for any control (Input, Select, Textarea, InputGroup …). */
export declare function Field(props: FieldProps): React.ReactElement;
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "outline" | "subtle" | "flushed";
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
  /** Monospace, no spell-check: YAML, cloud-init, scripts. */
  mono?: boolean;
}
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  variant?: "outline" | "subtle" | "flushed";
  /** Same heights as Input. Default "md". */
  size?: ControlSize;
  invalid?: boolean;
  options?: Array<string | { value: string; label: React.ReactNode; disabled?: boolean }>;
  /** Disabled first option shown while value is "". */
  placeholder?: string;
}
/** Native <select> styled like Input: fast, accessible, works on phones. */
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
export interface InputGroupProps {
  /** Icon name or node inside the input, left. */
  startElement?: IconName | React.ReactNode;
  /** Icon name or node (e.g. CopyButton) inside the input, right. */
  endElement?: IconName | React.ReactNode;
  /** Text box attached left / right, e.g. "https://", "GiB". */
  startAddon?: React.ReactNode;
  endAddon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** One Input. */
  children: React.ReactNode;
}
export declare function InputGroup(props: InputGroupProps): React.ReactElement;
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Box 16 / 20 / 24px. Default "md". */
  size?: "sm" | "md" | "lg";
  palette?: Palette;
  label?: React.ReactNode;
  /** Muted second line under the label. */
  description?: React.ReactNode;
  indeterminate?: boolean;
  invalid?: boolean;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export interface RadioGroupProps {
  label?: React.ReactNode;
  options: Array<string | { value: string; label: React.ReactNode; description?: React.ReactNode; disabled?: boolean }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  orientation?: "vertical" | "horizontal";
  size?: "sm" | "md" | "lg";
  palette?: Palette;
  name?: string;
  disabled?: boolean;
  className?: string;
}
export declare function RadioGroup(props: RadioGroupProps): React.ReactElement;
export interface SegmentGroupProps {
  options: Array<string | { value: string; label: React.ReactNode; icon?: IconName | React.ReactNode; count?: number; disabled?: boolean }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Item height 24 / 32 / 40px. Default "md". */
  size?: "xs" | "sm" | "md";
  "aria-label"?: string;
  name?: string;
  className?: string;
}
/** Segmented control: a filter or view switch with 2–5 options. */
export declare function SegmentGroup(props: SegmentGroupProps): React.ReactElement;
export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  onFiles?: (files: File[]) => void;
  className?: string;
}
/** Drop zone + click-to-pick. Lists the chosen files with sizes. */
export declare function FileUpload(props: FileUploadProps): React.ReactElement;

/* ================= Data display ================= */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "subtle" | "solid" | "outline" | "surface";
  /** Height 18 / 20 / 24 / 32px. Default "md". */
  size?: "sm" | "md" | "lg" | "xl";
  palette?: StatusPalette;
  icon?: IconName | React.ReactNode;
  /** Shows an × button. */
  onClose?: () => void;
  closeLabel?: string;
}
/** Label for profiles, images, projects, networks — optionally removable. */
export declare function Tag(props: TagProps): React.ReactElement;
export interface DataListProps {
  items: Array<{ label: React.ReactNode; value: React.ReactNode; mono?: boolean; /** true = copy the value, string = copy this */ copy?: boolean | string }>;
  orientation?: "vertical" | "horizontal";
  size?: "sm" | "md" | "lg";
  /** Hairlines between items. */
  divided?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
/** Key–value list for details panels (IP, image, created …). */
export declare function DataList(props: DataListProps): React.ReactElement;
export interface AccordionProps {
  items: Array<{ value: string; title: React.ReactNode; content: React.ReactNode; icon?: IconName | React.ReactNode }>;
  /** Open initially. */
  defaultValue?: string | string[];
  /** Allow several open (default: one at a time). */
  multiple?: boolean;
  variant?: "outline" | "enclosed" | "subtle";
  size?: "sm" | "md" | "lg";
  className?: string;
}
/** Native <details> sections — no JS needed to open/close. */
export declare function Accordion(props: AccordionProps): React.ReactElement;

/* ================= Feedback ================= */
export declare function Spinner(props: { size?: "xs" | "sm" | "md" | "lg" | "xl" | "inherit"; label?: string; className?: string }): React.ReactElement;
export declare function Skeleton(props: { width?: number | string; height?: number | string; circle?: boolean; loading?: boolean; className?: string; style?: React.CSSProperties; children?: React.ReactNode }): React.ReactElement | null;
export declare function SkeletonText(props: { lines?: number; className?: string; style?: React.CSSProperties }): React.ReactElement;
export interface EmptyStateProps {
  icon?: IconName | React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Buttons. */
  actions?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
}
export declare function EmptyState(props: EmptyStateProps): React.ReactElement;
export interface ToastOptions {
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** loading stays until updated; others close after 5 s (error 8 s). */
  status?: "success" | "error" | "warning" | "info" | "loading";
  /** ms; 0 = stay. */
  duration?: number;
  action?: { label: React.ReactNode; onClick?: () => void };
}
/** A single toast, presentational. Use <Toaster/> + toast() in apps. */
export declare function Toast(props: ToastOptions & { onClose?: () => void; className?: string }): React.ReactElement;
/** Render once at the app root. */
export declare function Toaster(props: { placement?: "bottom" | "top" }): React.ReactElement;
export interface ToastApi {
  (opts: ToastOptions | string): string;
  success(o: ToastOptions | string): string; error(o: ToastOptions | string): string; warning(o: ToastOptions | string): string;
  info(o: ToastOptions | string): string; loading(o: ToastOptions | string): string;
  /** Change a toast in place — e.g. loading → success when an Incus operation finishes. */
  update(id: string, patch: ToastOptions): void;
  dismiss(id?: string): void;
  promise<T>(p: Promise<T>, msgs: { loading: ToastOptions | string; success: string | ((v: T) => ToastOptions); error: string | ((e: any) => ToastOptions) }): Promise<T>;
}
export declare const toast: ToastApi;
export interface ActionBarProps {
  open?: boolean;
  /** Shows "N selected". */
  count?: number;
  onClear?: () => void;
  /** Static instead of fixed at the bottom (for docs). */
  inline?: boolean;
  "aria-label"?: string;
  className?: string;
  children?: React.ReactNode;
}
/** Floating bar for bulk actions on selected table rows. */
export declare function ActionBar(props: ActionBarProps): React.ReactElement | null;

/* ================= Navigation ================= */
export interface TabsProps {
  items: Array<{ value: string; label: React.ReactNode; icon?: IconName | React.ReactNode; count?: number; disabled?: boolean; content?: React.ReactNode }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: "line" | "subtle" | "enclosed";
  size?: "sm" | "md" | "lg";
  palette?: Palette;
  fitted?: boolean;
  "aria-label"?: string;
  className?: string;
  style?: React.CSSProperties;
}
/** Tabs with arrow-key navigation; renders the active item's `content`. */
export declare function Tabs(props: TabsProps): React.ReactElement;
export declare function Breadcrumb(props: { items: Array<{ label: React.ReactNode; href?: string; icon?: IconName | React.ReactNode; onClick?: React.MouseEventHandler }>; size?: "sm" | "md"; "aria-label"?: string; className?: string }): React.ReactElement;
export interface PaginationProps {
  count: number;
  pageSize?: number;
  page?: number;
  defaultPage?: number;
  onPageChange?: (page: number) => void;
  siblingCount?: number;
  /** "61–80 von 243". Default true. */
  showText?: boolean;
  size?: ControlSize;
  align?: "start" | "center" | "end";
  className?: string;
  style?: React.CSSProperties;
}
/** Collapses to ‹ 4 / 13 › on phones. */
export declare function Pagination(props: PaginationProps): React.ReactElement;
export declare function Steps(props: { items: Array<{ title: React.ReactNode; description?: React.ReactNode }>; /** 0-based */ current?: number; size?: "sm" | "md"; palette?: Palette; /** default: horizontal, vertical in containers < 36rem */ orientation?: "horizontal" | "vertical"; className?: string }): React.ReactElement;
export interface NavItem { label: React.ReactNode; icon?: IconName | React.ReactNode; href?: string; onClick?: React.MouseEventHandler; active?: boolean; badge?: React.ReactNode; }
export declare function Nav(props: { sections: Array<{ title?: React.ReactNode; items: NavItem[] }>; "aria-label"?: string; className?: string }): React.ReactElement;
export interface AppShellProps {
  brand?: React.ReactNode;
  /** Usually <Nav/>. */
  sidebar?: React.ReactNode;
  sidebarFooter?: React.ReactNode;
  /** Top bar content (Breadcrumb, search, user Menu). */
  header?: React.ReactNode;
  className?: string;
  /** --shell-sidebar (15rem), --shell-h (100dvh). */
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
/** App layout: sidebar + header + scrolling main. Under 768px the sidebar becomes a drawer. */
export declare function AppShell(props: AppShellProps): React.ReactElement;

/* ================= Overlays ================= */
export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  /** 24 / 28 / 32 / 42 / 56rem. Default "md". */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  placement?: "top" | "center";
  /** Default true. */
  closeOnBackdrop?: boolean;
  hideClose?: boolean;
  role?: "dialog" | "alertdialog";
  className?: string;
  children?: React.ReactNode;
}
/** Modal on native <dialog>: focus trap, Esc and top layer from the browser. */
export declare function Dialog(props: DialogProps): React.ReactElement;
export interface DrawerProps extends Omit<DialogProps, "placement" | "size"> {
  placement?: "end" | "start";
  /** 24 / 28 / 32 / 42rem. Default "md". */
  size?: "sm" | "md" | "lg" | "xl";
}
/** Side panel (details, edit forms) on native <dialog>. */
export declare function Drawer(props: DrawerProps): React.ReactElement;
export interface MenuItem { label?: React.ReactNode; icon?: IconName | React.ReactNode; command?: string; onSelect?: () => void; href?: string; danger?: boolean; disabled?: boolean; separator?: boolean; group?: React.ReactNode; }
export interface MenuProps {
  /** A Button / IconButton; it gets onClick + aria attributes. */
  trigger: React.ReactElement;
  items: MenuItem[];
  placement?: "bottom-start" | "bottom-end";
  defaultOpen?: boolean;
}
/** Dropdown menu in the top layer (never clipped, works inside Dialog/Drawer), flips up near the bottom edge. Arrow keys, Home/End, Esc, click outside. */
export declare function Menu(props: MenuProps): React.ReactElement;
/** CSS tooltip on hover (300 ms delay) and focus. */
/** Hint on hover (300 ms) and keyboard focus, in the browser's top layer — never clipped by overflow, scroll containers or dialogs. Flips when there is no room. Esc closes. */
export declare function Tooltip(props: { content: React.ReactNode; placement?: "top" | "bottom"; openDelay?: number; defaultOpen?: boolean; className?: string; children: React.ReactElement }): React.ReactElement;

/* ================= Combobox ================= */
export interface ComboboxOption { value: string; label: React.ReactNode; description?: React.ReactNode; icon?: IconName | React.ReactNode; group?: string; keywords?: string[]; disabled?: boolean; }
export interface ComboboxProps {
  options: Array<string | ComboboxOption>;
  /** string (single) or string[] (multiple). */
  value?: string | string[] | null;
  defaultValue?: string | string[] | null;
  onChange?: (value: any) => void;
  multiple?: boolean;
  placeholder?: string;
  clearable?: boolean;
  /** Same heights as Input. */
  size?: ControlSize;
  variant?: "outline" | "subtle" | "flushed";
  /** Search text changes — use with `filter={false}` and `loading` for server-side search. */
  onInputChange?: (query: string) => void;
  /** false = show `options` as given (already filtered by you). */
  filter?: boolean;
  loading?: boolean;
  /** Rendered options are capped (default 100) to stay fast; the list says how many more matched. */
  maxResults?: number;
  emptyText?: React.ReactNode;
  startElement?: IconName | React.ReactNode;
  openOnFocus?: boolean;
  defaultOpen?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  id?: string;
  "aria-label"?: string;
  className?: string;
  style?: React.CSSProperties;
}
/** Searchable select (ARIA combobox): type to filter (accents ignored, prefix matches first), ↑↓ Enter Esc, groups, descriptions, multi-select as Tags. List in the top layer. */
export declare const Combobox: React.ForwardRefExoticComponent<ComboboxProps & React.RefAttributes<HTMLInputElement>>;

/* ================= Charts ================= */
export interface ChartSeries { key: string; label: string; /** "ink" | "accent" | 1–4 | "other" | any CSS colour. Default: ink for one series, chart-1…4 in order. */ color?: string | number; }
export interface LineChartProps {
  data: Array<Record<string, any>>;
  /** Key of the x value (Date, epoch ms, number or label). Default "t". */
  x?: string;
  series: ChartSeries[];
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  /** Plot height in px incl. x-axis. Default 200. */
  height?: number;
  /** Fill under the line at 10 %. AreaChart = LineChart with area. */
  area?: boolean;
  unit?: string;
  yMin?: number;
  yMax?: number;
  formatValue?: (v: number) => string;
  formatX?: (x: any) => string;
  /** Horizontal reference lines in accent red, e.g. [{ value: 90, label: "Alarm" }]. */
  thresholds?: Array<{ value: number; label?: string }>;
  /** Label line ends with the series name (2–4 series, when they don't collide). Default true. */
  endLabels?: boolean;
  /** "Als Tabelle" toggle. Default true. */
  table?: boolean;
  xLabel?: string;
  /** Holds the last render at 50 % while refetching. */
  loading?: boolean;
  "aria-label"?: string;
  className?: string;
  style?: React.CSSProperties;
}
/** Time series: crosshair tooltip with every series, keyboard (←→ Home End), legend for ≥ 2 series, table view. */
export declare function LineChart(props: LineChartProps): React.ReactElement;
export declare function AreaChart(props: LineChartProps): React.ReactElement;
export interface BarChartProps {
  data: Array<{ label: string; value: number; /** accent red: the one bar the story is about */ highlight?: boolean; color?: string }>;
  /** Default "horizontal" (ranked categories); "vertical" for time buckets. */
  orientation?: "horizontal" | "vertical";
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  unit?: string;
  max?: number;
  color?: string;
  /** Vertical: plot height. Default 200. */
  height?: number;
  /** Horizontal: row height. Default 28. */
  barHeight?: number;
  formatValue?: (v: number) => string;
  table?: boolean;
  labelHeader?: string;
  valueHeader?: string;
  loading?: boolean;
  "aria-label"?: string;
  className?: string;
  style?: React.CSSProperties;
}
/** One series of bars (≤ 24px thick, rounded data end), values at the tip, hover + focus per bar, table view. */
export declare function BarChart(props: BarChartProps): React.ReactElement;
export interface SparklineProps {
  data: number[];
  /** Default "ink". */
  color?: string;
  width?: number | string;
  height?: number;
  min?: number;
  max?: number;
  /** Fill under the line. Default true. */
  area?: boolean;
  unit?: string;
  label?: string;
  formatValue?: (v: number) => string;
  thresholds?: Array<{ value: number }>;
  "aria-label"?: string;
  className?: string;
  style?: React.CSSProperties;
}
/** Tiny trend line without axes, e.g. in table cells and Stat tiles; hover shows the value. */
export declare function Sparkline(props: SparklineProps): React.ReactElement;

/* ================= Highlighter (for non-React renderers) ================= */
/** Lines of [tokenType | null, text] pairs — the same engine CodeBlock uses. */
export declare function highlight(code: string, language?: string): Array<{ cls?: string; toks: Array<[string | null, string]> }>;
/** Escaped HTML with kui-code-line / kui-tok-* spans: use as marked/markdown-it `highlight` so plain-HTML Markdown matches CodeBlock. */
export declare function highlightHtml(code: string, language?: string): string;

/* ================= Layout ================= */
/** Spacing step (3 = var(--space-3)) or any CSS length. */
export type Space = number | string;
export declare function Container(props: React.HTMLAttributes<HTMLElement> & { size?: "sm" | "md" | "lg" | "xl" | "full"; as?: string }): React.ReactElement;
export declare function Stack(props: React.HTMLAttributes<HTMLElement> & { direction?: "column" | "row"; gap?: Space; align?: React.CSSProperties["alignItems"]; justify?: React.CSSProperties["justifyContent"]; /** row wraps by default */ wrap?: boolean; as?: string }): React.ReactElement;
/** As many columns as fit at ≥ minChildWidth — responsive without media queries. */
export declare function Grid(props: React.HTMLAttributes<HTMLElement> & { minChildWidth?: string; /** fixed count; one column below 40rem */ columns?: number; gap?: Space; as?: string }): React.ReactElement;
export declare function PageHeader(props: { title?: React.ReactNode; description?: React.ReactNode; actions?: React.ReactNode; breadcrumb?: React.ReactNode; size?: HeadingProps["size"]; className?: string; style?: React.CSSProperties }): React.ReactElement;

/* ================= Extras ================= */
export declare function useMediaQuery(query: string): boolean;
/** "mod+k" (Ctrl, ⌘ on macOS), "shift+?", "g,i" alternatives comma-separated. Ignored while typing unless inInputs or it uses a modifier. */
export declare function useHotkey(combo: string, handler: (e: KeyboardEvent) => void, opts?: { inInputs?: boolean }): void;
/** [preference, setPreference, resolved]. Stores in localStorage "kui-theme" and sets <html data-theme>. */
export declare function useTheme(): ["system" | "light" | "dark", (p: "system" | "light" | "dark") => void, "light" | "dark"];
export declare function ThemeToggle(props: { variant?: "icon" | "segment"; size?: ControlSize }): React.ReactElement;
export declare function Avatar(props: { name: string; src?: string; size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"; shape?: "circle" | "square"; status?: ServiceState; className?: string; style?: React.CSSProperties }): React.ReactElement;
export declare function AvatarGroup(props: { max?: number; size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"; className?: string; children: React.ReactNode }): React.ReactElement;
export declare function Popover(props: { trigger: React.ReactElement; title?: React.ReactNode; footer?: React.ReactNode; children?: React.ReactNode | ((api: { close: () => void }) => React.ReactNode);
  open?: boolean; defaultOpen?: boolean; onOpenChange?: (o: boolean) => void; placement?: "bottom-start" | "bottom-end" | "bottom" | "top" | "top-start" | "top-end"; size?: "xs" | "sm" | "md" | "lg"; width?: string | number; className?: string }): React.ReactElement;
export interface CommandItem { label: string; group?: string; icon?: IconName | React.ReactNode; description?: string; keywords?: string[]; shortcut?: string; onSelect?: () => void; href?: string; }
/** Ctrl/⌘+K palette. */
export declare function CommandPalette(props: { items: CommandItem[]; open?: boolean; onOpenChange?: (o: boolean) => void; hotkey?: string; placeholder?: string; emptyText?: React.ReactNode }): React.ReactElement;
/** Promise-based confirm; render <ConfirmHost/> once. */
export declare function confirm(opts: string | { title: React.ReactNode; description?: React.ReactNode; body?: React.ReactNode; danger?: boolean; confirmText?: string; confirmLabel?: string; cancelLabel?: string }): Promise<boolean>;
export declare function ConfirmHost(): React.ReactElement;
export declare const NumberInput: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "value" | "defaultValue" | "onChange"> & { value?: number | string; defaultValue?: number; onChange?: (v: number | string) => void; min?: number; max?: number; step?: number; unit?: string; size?: ControlSize; variant?: "outline" | "subtle" | "flushed"; invalid?: boolean } & React.RefAttributes<HTMLInputElement>>;
export declare const Slider: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "value" | "defaultValue" | "onChange"> & { value?: number; defaultValue?: number; onChange?: (v: number) => void; min?: number; max?: number; step?: number; label?: React.ReactNode; unit?: string; formatValue?: (v: number) => string; showValue?: boolean; marks?: Array<number | { value: number; label: React.ReactNode }>; palette?: Palette; size?: "sm" | "md" | "lg" } & React.RefAttributes<HTMLInputElement>>;
export declare function ProgressCircle(props: { value: number; max?: number; size?: "xs" | "sm" | "md" | "lg" | "xl"; palette?: StatusPalette | "neutral"; thresholds?: [number, number] | false; showValue?: boolean; valueText?: React.ReactNode; label?: string; className?: string; style?: React.CSSProperties }): React.ReactElement;
export declare function RelativeTime(props: { date: Date | string | number; className?: string }): React.ReactElement;
export declare function relativeTime(date: Date | number): string;
export declare function Timeline(props: { items: Array<{ key?: string; title: React.ReactNode; status?: ServiceState | StatusPalette | "neutral"; icon?: IconName | React.ReactNode; time?: Date | number | React.ReactNode; description?: React.ReactNode; content?: React.ReactNode }>; className?: string; style?: React.CSSProperties }): React.ReactElement;
export declare function UptimeBar(props: { data: Array<{ label?: string; status: "up" | "degraded" | "down" | "none"; note?: string }>; label?: React.ReactNode; showPercent?: boolean; startLabel?: React.ReactNode; endLabel?: React.ReactNode; className?: string; style?: React.CSSProperties }): React.ReactElement;
export declare function KeyValueEditor(props: { value?: Array<{ key: string; value: string }>; defaultValue?: Array<{ key: string; value: string }>; onChange?: (rows: Array<{ key: string; value: string }>) => void; keyLabel?: string; valueLabel?: string; keyPlaceholder?: string; valuePlaceholder?: string; addLabel?: string; secret?: boolean; hint?: boolean; className?: string; style?: React.CSSProperties }): React.ReactElement;
export interface TreeNode { id: string; label: React.ReactNode; icon?: IconName | React.ReactNode; meta?: React.ReactNode; children?: TreeNode[]; }
export declare function TreeView(props: { items: TreeNode[]; selected?: string; onSelect?: (n: TreeNode) => void; defaultExpanded?: string[]; "aria-label"?: string; className?: string }): React.ReactElement;
export declare function SkipLink(props: { href?: string; children?: React.ReactNode }): React.ReactElement;
export declare function Banner(props: { "aria-label"?: string; variant?: "inverted" | "accent" | "subtle"; action?: React.ReactNode; dismissible?: boolean; onDismiss?: () => void; className?: string; children?: React.ReactNode }): React.ReactElement | null;
export declare function Navbar(props: { brand?: React.ReactNode; brandHref?: string; links?: Array<{ label: React.ReactNode; href: string; active?: boolean }>; actions?: React.ReactNode; sticky?: boolean; size?: "sm" | "md" | "lg" | "xl" | "full"; className?: string }): React.ReactElement;
export declare function Hero(props: { title: React.ReactNode; description?: React.ReactNode; eyebrow?: React.ReactNode; actions?: React.ReactNode; align?: "start" | "center"; size?: "sm" | "md" | "lg" | "xl"; className?: string; children?: React.ReactNode }): React.ReactElement;
export declare function FeatureGrid(props: { headingLevel?: 2 | 3 | 4 | 5 | 6; items: Array<{ icon?: IconName | React.ReactNode; title: React.ReactNode; description?: React.ReactNode; link?: React.ReactNode }>; minChildWidth?: string; gap?: Space; className?: string }): React.ReactElement;
export declare function Footer(props: { brand?: React.ReactNode; columns?: Array<{ title: string; links: Array<{ label: React.ReactNode; href: string }> }>; copyright?: React.ReactNode; extra?: React.ReactNode; size?: "sm" | "md" | "lg" | "xl"; className?: string }): React.ReactElement;

/* ---------- Language ---------- */
export type Locale = "en" | "de" | (string & {});
/** Switch built-in UI strings + Intl formatting. Default "en" (en-GB formatting). Call once before rendering. */
export declare function setLocale(lang: Locale, opts?: { intl?: string; messages?: Record<string, string> }): void;
/** Translate a built-in message key in the current locale; {n}-style placeholders are filled from vars. */
export declare function t(key: string, vars?: Record<string, string | number>): string;
/** Built-in message tables, keyed by locale. */
export declare const messages: Record<string, Record<string, string>>;
