/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface KekaDropdown {
        "alignment": 'start' | 'end';
        "avatars": boolean;
        "label": string;
        "multiple": boolean;
        "position": 'left' | 'top' | 'right' | 'bottom';
        "type": 'select' | 'input' | 'list';
    }
    interface KekaDropdownItem {
        "avatar": string;
        "checked": boolean;
        "itemClicked": () => Promise<void>;
        "label": string;
        "multiple": boolean;
        "parentRef": string;
        "showAvatar": boolean;
        "type": 'select' | 'input' | 'list';
    }
    interface KekaGlobalHeader {
    }
    interface KekaTabBar {
        "currentTab": () => Promise<number>;
        "type": 'atom' | 'switch';
    }
    interface KekaTabItem {
        "disabled": boolean;
        "header": string;
        "navigate": string;
        "open": boolean;
        "prefixLabelIcon": string;
        "suffixLabelIcon": string;
        "type": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
export interface KekaDropdownCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLKekaDropdownElement;
}
export interface KekaDropdownItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLKekaDropdownItemElement;
}
export interface KekaTabBarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLKekaTabBarElement;
}
declare global {
    interface HTMLKekaDropdownElement extends Components.KekaDropdown, HTMLStencilElement {
    }
    var HTMLKekaDropdownElement: {
        prototype: HTMLKekaDropdownElement;
        new (): HTMLKekaDropdownElement;
    };
    interface HTMLKekaDropdownItemElement extends Components.KekaDropdownItem, HTMLStencilElement {
    }
    var HTMLKekaDropdownItemElement: {
        prototype: HTMLKekaDropdownItemElement;
        new (): HTMLKekaDropdownItemElement;
    };
    interface HTMLKekaGlobalHeaderElement extends Components.KekaGlobalHeader, HTMLStencilElement {
    }
    var HTMLKekaGlobalHeaderElement: {
        prototype: HTMLKekaGlobalHeaderElement;
        new (): HTMLKekaGlobalHeaderElement;
    };
    interface HTMLKekaTabBarElement extends Components.KekaTabBar, HTMLStencilElement {
    }
    var HTMLKekaTabBarElement: {
        prototype: HTMLKekaTabBarElement;
        new (): HTMLKekaTabBarElement;
    };
    interface HTMLKekaTabItemElement extends Components.KekaTabItem, HTMLStencilElement {
    }
    var HTMLKekaTabItemElement: {
        prototype: HTMLKekaTabItemElement;
        new (): HTMLKekaTabItemElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "keka-dropdown": HTMLKekaDropdownElement;
        "keka-dropdown-item": HTMLKekaDropdownItemElement;
        "keka-global-header": HTMLKekaGlobalHeaderElement;
        "keka-tab-bar": HTMLKekaTabBarElement;
        "keka-tab-item": HTMLKekaTabItemElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface KekaDropdown {
        "alignment"?: 'start' | 'end';
        "avatars"?: boolean;
        "label"?: string;
        "multiple"?: boolean;
        "onCheckboxAction"?: (event: KekaDropdownCustomEvent<{ label: string; avatar: string; checked: boolean }>) => void;
        "position"?: 'left' | 'top' | 'right' | 'bottom';
        "type"?: 'select' | 'input' | 'list';
    }
    interface KekaDropdownItem {
        "avatar"?: string;
        "checked"?: boolean;
        "label"?: string;
        "multiple"?: boolean;
        "onItemClick"?: (event: KekaDropdownItemCustomEvent<{ label: string; avatar: string; checked: boolean; parentRef: string }>) => void;
        "parentRef"?: string;
        "showAvatar"?: boolean;
        "type"?: 'select' | 'input' | 'list';
    }
    interface KekaGlobalHeader {
    }
    interface KekaTabBar {
        "onTab"?: (event: KekaTabBarCustomEvent<{ index: number }>) => void;
        "type"?: 'atom' | 'switch';
    }
    interface KekaTabItem {
        "disabled"?: boolean;
        "header"?: string;
        "navigate"?: string;
        "open"?: boolean;
        "prefixLabelIcon"?: string;
        "suffixLabelIcon"?: string;
        "type"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "keka-dropdown": KekaDropdown;
        "keka-dropdown-item": KekaDropdownItem;
        "keka-global-header": KekaGlobalHeader;
        "keka-tab-bar": KekaTabBar;
        "keka-tab-item": KekaTabItem;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "keka-dropdown": LocalJSX.KekaDropdown & JSXBase.HTMLAttributes<HTMLKekaDropdownElement>;
            "keka-dropdown-item": LocalJSX.KekaDropdownItem & JSXBase.HTMLAttributes<HTMLKekaDropdownItemElement>;
            "keka-global-header": LocalJSX.KekaGlobalHeader & JSXBase.HTMLAttributes<HTMLKekaGlobalHeaderElement>;
            "keka-tab-bar": LocalJSX.KekaTabBar & JSXBase.HTMLAttributes<HTMLKekaTabBarElement>;
            "keka-tab-item": LocalJSX.KekaTabItem & JSXBase.HTMLAttributes<HTMLKekaTabItemElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
