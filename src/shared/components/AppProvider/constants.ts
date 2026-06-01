import { ThemeConfig } from 'antd';

export const THEME_CONFIG: ThemeConfig = {
  token: {
    /* Brand */
    colorPrimary: 'var(--color-accent-gold-dark)',
    colorInfo: 'var(--color-accent-gold-dark)',
    colorSuccess: 'var(--color-state-success)',
    colorError: 'var(--color-state-error)',
    colorWarning: 'var(--color-accent-gold)',

    /* Text */
    colorText: 'var(--color-text-primary)',
    colorTextSecondary: 'var(--color-text-secondary)',
    colorTextTertiary: 'var(--color-text-secondary)',
    colorTextPlaceholder: 'var(--color-text-secondary)',

    /* Backgrounds */
    colorBgBase: 'var(--color-bg-page)',
    colorBgLayout: 'var(--color-bg-page)',
    colorBgContainer: 'var(--color-bg-card)',
    colorBgElevated: 'var(--color-bg-card)',

    /* Borders */
    colorBorder: 'var(--color-border-field)',
    colorBorderSecondary: 'var(--color-border-soft)',

    /* Typography */
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    lineHeight: 1.5,

    /* Geometry */
    borderRadius: 9,
    borderRadiusLG: 18,
    borderRadiusSM: 6,
    controlHeight: 47,
    controlHeightLG: 50,

    /* Effects */
    boxShadowSecondary: '0 22px 80px rgba(73, 62, 41, 0.09)',
  },

  components: {
    Input: {
      activeBorderColor: 'var(--color-accent-gold)',
      hoverBorderColor: 'var(--color-accent-gold)',
      activeShadow: '0 0 0 3px rgba(200, 150, 62, 0.13)',
      paddingInline: 14,
      colorError: 'var(--color-state-error)',
    },
    Select: {
      /* Поле */
      activeBorderColor: '#c8963e',
      hoverBorderColor: '#c8963e',
      activeOutlineColor: 'rgba(200, 150, 62, 0.13)',
      paddingSM: 15,
      colorError: 'var(--color-state-error)',

      /* Выпадающее меню */
      optionSelectedBg: '#f8f2e7',
      optionSelectedColor: '#1a241f',
      optionActiveBg: '#fbf7ef',
      optionPadding: '9px 12px',
      optionFontSize: 14,
      optionHeight: 38,

      /* Несколько выбранных значений */
      multipleItemBg: '#f8f2e7',
      multipleItemBorderColor: '#e4dfd4',
      multipleItemHeight: 26,

      /* Геометрия dropdown */
      borderRadius: 9,
    },
    DatePicker: {
      activeBorderColor: 'var(--color-accent-gold)',
      hoverBorderColor: 'var(--color-accent-gold)',
      activeShadow: '0 0 0 3px rgba(200, 150, 62, 0.13)',
      paddingInline: 14,
      colorError: 'var(--color-state-error)',
    },
  },
};
