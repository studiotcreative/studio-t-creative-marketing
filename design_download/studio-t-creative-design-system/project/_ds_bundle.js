/* @ds-bundle: {"format":3,"namespace":"StudioTCreativeDesignSystem_34f7c6","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/display/Eyebrow.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"8c3b9f886e35","components/display/Badge.jsx":"c848d661cde6","components/display/Card.jsx":"34e452ab6543","components/display/Eyebrow.jsx":"ada4c203752a","components/display/Stat.jsx":"fa2ad2f40c9f","components/forms/Checkbox.jsx":"05432d90bd6b","components/forms/Field.jsx":"6ba6c002d888","components/forms/Input.jsx":"d43f3c5f8c41","components/forms/Select.jsx":"f4c566587e94","ui_kits/website/chrome.jsx":"fa40d6b387e5","ui_kits/website/sections.jsx":"2d4235facd73"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StudioTCreativeDesignSystem_34f7c6 = window.StudioTCreativeDesignSystem_34f7c6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio T Creative — Button
 * Capsule CTA in the brand's warm palette.
 */
function Button({
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  disabled = false,
  as = 'button',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 18px',
      fontSize: 'var(--text-sm)',
      gap: '7px'
    },
    md: {
      padding: '12px 26px',
      fontSize: 'var(--text-base)',
      gap: '9px'
    },
    lg: {
      padding: '16px 36px',
      fontSize: 'var(--text-md)',
      gap: '11px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1.5px solid var(--accent)',
      boxShadow: 'var(--shadow-brand)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-accent)',
      border: '1.5px solid var(--border-accent)',
      boxShadow: 'none'
    },
    soft: {
      background: 'var(--surface-blush)',
      color: 'var(--terracotta-700)',
      border: '1.5px solid transparent',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-accent)',
      border: '1.5px solid transparent',
      boxShadow: 'none'
    },
    inverse: {
      background: 'var(--cream-100)',
      color: 'var(--espresso-900)',
      border: '1.5px solid var(--cream-100)',
      boxShadow: 'var(--shadow-md)'
    }
  };
  const radius = shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-md)';
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? disabled : undefined,
    "data-variant": variant,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: sizes[size].gap,
      width: fullWidth ? '100%' : 'auto',
      padding: sizes[size].padding,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: sizes[size].fontSize,
      letterSpacing: '0.02em',
      lineHeight: 1,
      borderRadius: radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      textDecoration: 'none',
      transition: 'var(--transition-base)',
      ...variants[variant],
      ...style
    }
  }, rest), leftIcon, children, rightIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio T Creative — Badge
 * Small status/category pill.
 */
function Badge({
  children,
  tone = 'brand',
  style = {},
  ...rest
}) {
  const tones = {
    brand: {
      bg: 'var(--surface-blush)',
      fg: 'var(--terracotta-700)'
    },
    accent: {
      bg: 'var(--terracotta-600)',
      fg: 'var(--cream-50)'
    },
    neutral: {
      bg: 'var(--cream-200)',
      fg: 'var(--warm-700)'
    },
    success: {
      bg: 'color-mix(in srgb, var(--success) 16%, white)',
      fg: 'var(--success)'
    },
    outline: {
      bg: 'transparent',
      fg: 'var(--terracotta-600)'
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 12px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      border: tone === 'outline' ? '1.5px solid var(--border-accent)' : '1.5px solid transparent',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio T Creative — Card
 * Soft, warm surface container. Supports an optional eyebrow + title header,
 * a media slot, and any children as the body.
 */
function Card({
  variant = 'surface',
  eyebrow = null,
  title = null,
  media = null,
  padding = 'var(--space-6)',
  children,
  style = {},
  ...rest
}) {
  const variants = {
    surface: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)'
    },
    blush: {
      background: 'var(--surface-blush)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    inverse: {
      background: 'var(--espresso-900)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-lg)'
    },
    outline: {
      background: 'transparent',
      border: '1.5px solid var(--border-default)',
      boxShadow: 'none'
    }
  };
  const inverse = variant === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      color: inverse ? 'var(--cream-100)' : 'var(--text-body)',
      ...variants[variant],
      ...style
    }
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, media), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 'var(--text-2xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: inverse ? 'var(--rose-300)' : 'var(--text-accent)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-2xl)',
      lineHeight: 'var(--leading-snug)',
      color: inverse ? 'var(--cream-50)' : 'var(--text-strong)'
    }
  }, title), children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio T Creative — Eyebrow
 * Small uppercase label that sits above headings.
 */
function Eyebrow({
  children,
  color = 'var(--text-accent)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio T Creative — Stat
 * Large display-serif metric with caption. Used in proof/results bands.
 */
function Stat({
  value,
  label,
  align = 'left',
  tone = 'accent',
  style = {},
  ...rest
}) {
  const tones = {
    accent: 'var(--terracotta-600)',
    ink: 'var(--text-strong)',
    cream: 'var(--cream-100)',
    rose: 'var(--rose-400)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-5xl)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tight)',
      color: tones[tone]
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)',
      color: tone === 'cream' ? 'var(--cream-200)' : 'var(--text-muted)',
      maxWidth: '22ch'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio T Creative — Checkbox
 * Custom checkbox with terracotta fill when checked.
 */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      userSelect: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '20px',
      height: '20px',
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${checked ? 'var(--accent)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--accent)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--cream-50)',
      fontSize: '12px',
      lineHeight: 1,
      transition: 'var(--transition-base)'
    }
  }, checked && '✓'), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio T Creative — Field
 * Label + control wrapper with optional hint / error text.
 */
function Field({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      marginLeft: '3px'
    }
  }, "*")), children, (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio T Creative — Input
 * Text field with warm borders and terracotta focus.
 */
function Input({
  invalid = false,
  size = 'md',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '9px 13px',
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: '13px 16px',
      fontSize: 'var(--text-base)'
    },
    lg: {
      padding: '16px 18px',
      fontSize: 'var(--text-md)'
    }
  };
  return /*#__PURE__*/React.createElement("input", _extends({
    style: {
      width: '100%',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: `1.5px solid ${invalid ? 'var(--error)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'var(--transition-base)',
      ...sizes[size],
      ...style
    },
    onFocus: e => {
      if (!invalid) e.target.style.borderColor = 'var(--accent)';
      e.target.style.boxShadow = '0 0 0 3px var(--focus-ring)';
    },
    onBlur: e => {
      e.target.style.borderColor = invalid ? 'var(--error)' : 'var(--border-default)';
      e.target.style.boxShadow = 'none';
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio T Creative — Select
 * Styled native select with custom chevron.
 */
function Select({
  invalid = false,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    style: {
      width: '100%',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: `1.5px solid ${invalid ? 'var(--error)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '13px 42px 13px 16px',
      outline: 'none',
      cursor: 'pointer',
      transition: 'var(--transition-base)',
      ...style
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--accent)';
      e.target.style.boxShadow = '0 0 0 3px var(--focus-ring)';
    },
    onBlur: e => {
      e.target.style.borderColor = invalid ? 'var(--error)' : 'var(--border-default)';
      e.target.style.boxShadow = 'none';
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: '12px'
    }
  }, "\u25BE"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/chrome.jsx
try { (() => {
/* Studio T Creative — Website UI kit: Header & Footer */
const DS = window.StudioTCreativeDesignSystem_34f7c6;
function Header({
  onNav,
  active
}) {
  const {
    Button
  } = DS;
  const links = ['Home', 'Services', 'Resource Hub', 'Portfolio', 'Case Studies'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'color-mix(in srgb, var(--cream-100) 88%, transparent)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '14px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: '28px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      onNav('Home');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-monogram.png",
    alt: "Studio T",
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '26px',
      flex: 1
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(l);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: 500,
      letterSpacing: '0.01em',
      textDecoration: 'none',
      color: active === l ? 'var(--terracotta-600)' : 'var(--text-body)',
      paddingBottom: '2px',
      borderBottom: active === l ? '2px solid var(--terracotta-600)' : '2px solid transparent'
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav('Contact')
  }, "Get a Custom Proposal")));
}
function Footer({
  onNav
}) {
  const socials = ['Instagram', 'TikTok', 'Facebook', 'LinkedIn'];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--espresso-900)',
      color: 'var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '56px var(--gutter) 40px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '30px',
      color: 'var(--cream-50)',
      fontWeight: 500,
      lineHeight: 1.1
    }
  }, "studio T ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      color: 'var(--rose-300)',
      fontSize: '26px'
    }
  }, "creative")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      lineHeight: 1.6,
      marginTop: '14px',
      color: 'var(--cream-300)'
    }
  }, "Strategic Brand Growth for businesses that need clarity, consistency, and measurable momentum.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '64px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--rose-300)',
      marginBottom: '14px',
      fontWeight: 600
    }
  }, "Services"), ['Brand Foundation', 'Content Engine', 'Growth & Conversion', 'Campaign Production Studio'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('Services');
    },
    style: {
      display: 'block',
      fontSize: '14px',
      color: 'var(--cream-200)',
      textDecoration: 'none',
      marginBottom: '9px'
    }
  }, s))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--rose-300)',
      marginBottom: '14px',
      fontWeight: 600
    }
  }, "Connect"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@studiot-creative.com",
    style: {
      display: 'block',
      fontSize: '14px',
      color: 'var(--cream-200)',
      textDecoration: 'none',
      marginBottom: '14px'
    }
  }, "hello@studiot-creative.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    title: s,
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: '1px solid var(--warm-500)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.toLowerCase(),
    style: {
      width: 16,
      height: 16
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid color-mix(in srgb, var(--cream-200) 18%, transparent)',
      padding: '18px var(--gutter)',
      maxWidth: 'var(--container-xl)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--warm-400)'
    }
  }, "\xA9 2026 Studio T Creative Marketing. All rights reserved.")));
}
Object.assign(window, {
  STHeader: Header,
  STFooter: Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
/* Studio T Creative — Website UI kit: page sections */
const DSx = window.StudioTCreativeDesignSystem_34f7c6;
function Hero({
  onNav
}) {
  const {
    Button,
    Eyebrow
  } = DSx;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-100)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: 'clamp(56px,8vw,104px) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 'clamp(32px,5vw,72px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Strategic Brand Growth Partner"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(48px,6vw,84px)',
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color: 'var(--ink)',
      margin: '18px 0 0'
    }
  }, "Strategic", /*#__PURE__*/React.createElement("br", null), "Brand ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--terracotta-600)'
    }
  }, "Growth")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(16px,1.4vw,19px)',
      lineHeight: 1.65,
      color: 'var(--text-body)',
      maxWidth: 460,
      margin: '24px 0 0'
    }
  }, "For businesses that need clarity, consistency, and measurable momentum. We help you define your brand, communicate clearly, and build content and conversion systems that turn attention into action."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      marginTop: '32px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    rightIcon: /*#__PURE__*/React.createElement("span", null, "\u2192"),
    onClick: () => onNav('Contact')
  }, "Get a Custom Proposal"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('Services')
  }, "View Services"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      justifySelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(380px,80vw)',
      aspectRatio: '4/5',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xl)',
      background: 'var(--blush-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mood-overwhelm.png",
    alt: "Studio T editorial",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-monogram.png",
    alt: "",
    style: {
      position: 'absolute',
      bottom: -26,
      left: -26,
      width: 96,
      height: 96,
      borderRadius: '50%',
      boxShadow: 'var(--shadow-lg)',
      border: '4px solid var(--cream-100)'
    }
  }))));
}
const SERVICES = [{
  name: 'Brand Foundation',
  img: 'mood-canva.png',
  desc: 'Positioning, identity & messaging that give every touchpoint a clear, consistent base.'
}, {
  name: 'Content Engine',
  img: 'mood-engage.png',
  desc: 'A structured, repeatable system that keeps you publishing with intention.'
}, {
  name: 'Growth & Conversion',
  img: 'mood-outdated.png',
  desc: 'Funnels and touchpoints engineered to turn attention into measurable action.'
}, {
  name: 'Campaign Production Studio',
  img: 'mood-overwhelm.png',
  desc: 'Photo, video and campaign production that brings the strategy to life.'
}];
function Services({
  onNav
}) {
  const {
    Eyebrow
  } = DSx;
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      background: 'var(--cream-50)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '48px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(34px,4vw,52px)',
      color: 'var(--ink)',
      margin: '12px 0 0',
      letterSpacing: '-0.02em'
    }
  }, "Services")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.name,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('Services');
    },
    className: "svc-tile",
    style: {
      textDecoration: 'none',
      display: 'block',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-md)',
      transition: 'var(--transition-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/${s.img}`,
    alt: s.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '21px',
      color: 'var(--text-strong)',
      margin: '0 0 8px',
      lineHeight: 1.15
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      lineHeight: 1.55,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, s.desc)))))));
}
const STATS = [['250%', 'Increase in brand awareness for clients who use our system'], ['20+', 'Years of combined experience crafting stories that connect'], ['50+', 'Happy clients who partnered with us to bring their vision to life'], ['500+', 'Strategies delivered — every one designed to win']];
function StatsBand() {
  const {
    Stat
  } = DSx;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--espresso-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: 'clamp(48px,6vw,80px) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '32px'
    }
  }, STATS.map(([v, l]) => /*#__PURE__*/React.createElement(Stat, {
    key: v,
    value: v,
    label: l,
    tone: "cream"
  }))));
}
function About() {
  const {
    Eyebrow
  } = DSx;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-100)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "About Studio T"), /*#__PURE__*/React.createElement("hr", {
    className: "st-rule",
    style: {
      margin: '18px auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(24px,2.6vw,34px)',
      lineHeight: 1.3,
      color: 'var(--ink)',
      letterSpacing: '-0.01em'
    }
  }, "We're a Strategic Brand Growth Partner for businesses ready to grow with more clarity, stronger positioning, and a more intentional presence."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '17px',
      lineHeight: 1.7,
      color: 'var(--text-body)',
      marginTop: '24px'
    }
  }, "Through our systems, we turn scattered marketing efforts into one aligned growth approach designed to create consistency, strengthen trust, and generate meaningful business momentum \u2014 so visibility connects directly to action.")));
}
const CLIENTS = ['Restaurante Alma', 'Motores Dryft', 'Chimo El Tigrito', 'West Plaza', 'Ninguna Cultura', 'Estudio Rosalba'];
function Clients() {
  const {
    Eyebrow
  } = DSx;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-50)',
      padding: 'clamp(48px,6vw,80px) 0',
      borderTop: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--text-muted)"
  }, "Trusted by brands we've grown"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: '16px',
      marginTop: '28px'
    }
  }, CLIENTS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      aspectRatio: '1',
      borderRadius: '50%',
      background: 'var(--cream-200)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '12px',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '13px',
      lineHeight: 1.2,
      color: 'var(--terracotta-600)',
      textAlign: 'center',
      border: '1px solid var(--hairline)'
    }
  }, c)))));
}
function Contact() {
  const {
    Eyebrow,
    Field,
    Input,
    Select,
    Button
  } = DSx;
  const {
    useState
  } = React;
  const [improve, setImprove] = useState('Brand Identity');
  const [sent, setSent] = useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: 'var(--rose-400)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-50)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-xl)',
      padding: 'clamp(32px,5vw,56px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '32px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Let's chat!"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(30px,3.4vw,46px)',
      color: 'var(--ink)',
      margin: '12px 0 8px',
      letterSpacing: '-0.02em'
    }
  }, "Start a conversation"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@studiot-creative.com",
    style: {
      fontSize: '15px',
      color: 'var(--terracotta-600)'
    }
  }, "hello@studiot-creative.com")), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '24px',
      fontFamily: 'var(--font-display)',
      fontSize: '24px',
      color: 'var(--terracotta-600)'
    }
  }, "Thank you \u2014 we'll be in touch within one business day.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "What are you trying to improve?",
    htmlFor: "improve"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "improve",
    value: improve,
    onChange: e => setImprove(e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "Brand Identity"), /*#__PURE__*/React.createElement("option", null, "Content System"), /*#__PURE__*/React.createElement("option", null, "Marketing Strategy"), /*#__PURE__*/React.createElement("option", null, "Not sure"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full Name",
    htmlFor: "fn",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "fn",
    placeholder: "Jordan Rivera"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    htmlFor: "em",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "em",
    type: "email",
    placeholder: "you@company.com"
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Submit")))));
}
Object.assign(window, {
  STHero: Hero,
  STServices: Services,
  STStatsBand: StatsBand,
  STAbout: About,
  STClients: Clients,
  STContact: Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
