/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Users } from "./model";
export { Users } from "./model";
export namespace Components {
    interface AvatarStack {
        "size": "avatar-xs"|"avatar-sm"|"avatar-md"|"avatar-lg"|"avatar-xl"|"avatar-xxl"|"avatar-xxxl";
        "value": Users[];
    }
    interface KekaAvatar {
        "allUsers": Users[];
        "class": string;
        "shape": string;
        "size": string;
        "user": Users;
    }
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
    interface KekaInput {
        "data": Users[];
        "disable": boolean;
        "id": string;
        "name": string;
        "size": string;
        "value": string | null;
        "variant": "primary" | "secondary";
    }
    interface KekaProfessionalAvatar {
        "data": Users;
        "size": string;
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
    interface KekaTooltip {
        "arrow": boolean;
        "left": number;
        "position": "top"|"right"|"bottom"|"left";
        "text": string;
        "theme": string;
    }
    interface MyComponent {
    }
    interface ProgressIndicator {
        "fill": number;
        "showLabel": boolean;
        "tooltip": boolean;
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
export interface KekaInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLKekaInputElement;
}
export interface KekaTabBarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLKekaTabBarElement;
}
declare global {
    interface HTMLAvatarStackElement extends Components.AvatarStack, HTMLStencilElement {
    }
    var HTMLAvatarStackElement: {
        prototype: HTMLAvatarStackElement;
        new (): HTMLAvatarStackElement;
    };
    interface HTMLKekaAvatarElement extends Components.KekaAvatar, HTMLStencilElement {
    }
    var HTMLKekaAvatarElement: {
        prototype: HTMLKekaAvatarElement;
        new (): HTMLKekaAvatarElement;
    };
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
    interface HTMLKekaInputElement extends Components.KekaInput, HTMLStencilElement {
    }
    var HTMLKekaInputElement: {
        prototype: HTMLKekaInputElement;
        new (): HTMLKekaInputElement;
    };
    interface HTMLKekaProfessionalAvatarElement extends Components.KekaProfessionalAvatar, HTMLStencilElement {
    }
    var HTMLKekaProfessionalAvatarElement: {
        prototype: HTMLKekaProfessionalAvatarElement;
        new (): HTMLKekaProfessionalAvatarElement;
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
    interface HTMLKekaTooltipElement extends Components.KekaTooltip, HTMLStencilElement {
    }
    var HTMLKekaTooltipElement: {
        prototype: HTMLKekaTooltipElement;
        new (): HTMLKekaTooltipElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLProgressIndicatorElement extends Components.ProgressIndicator, HTMLStencilElement {
    }
    var HTMLProgressIndicatorElement: {
        prototype: HTMLProgressIndicatorElement;
        new (): HTMLProgressIndicatorElement;
    };
    interface HTMLElementTagNameMap {
        "avatar-stack": HTMLAvatarStackElement;
        "keka-avatar": HTMLKekaAvatarElement;
        "keka-dropdown": HTMLKekaDropdownElement;
        "keka-dropdown-item": HTMLKekaDropdownItemElement;
        "keka-global-header": HTMLKekaGlobalHeaderElement;
        "keka-input": HTMLKekaInputElement;
        "keka-professional-avatar": HTMLKekaProfessionalAvatarElement;
        "keka-tab-bar": HTMLKekaTabBarElement;
        "keka-tab-item": HTMLKekaTabItemElement;
        "keka-tooltip": HTMLKekaTooltipElement;
        "my-component": HTMLMyComponentElement;
        "progress-indicator": HTMLProgressIndicatorElement;
    }
}
declare namespace LocalJSX {
    interface AvatarStack {
        "size"?: "avatar-xs"|"avatar-sm"|"avatar-md"|"avatar-lg"|"avatar-xl"|"avatar-xxl"|"avatar-xxxl";
        "value"?: Users[];
    }
    interface KekaAvatar {
        "allUsers"?: Users[];
        "class"?: string;
        "shape"?: string;
        "size"?: string;
        "user"?: Users;
    }
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
    interface KekaInput {
        "data"?: Users[];
        "disable"?: boolean;
        "id"?: string;
        "name"?: string;
        "onBlur"?: (event: KekaInputCustomEvent<void>) => void;
        "onClick"?: (event: KekaInputCustomEvent<void>) => void;
        "onEnter"?: (event: KekaInputCustomEvent<any>) => void;
        "onFocus"?: (event: KekaInputCustomEvent<void>) => void;
        "onInput"?: (event: KekaInputCustomEvent<any>) => void;
        "size"?: string;
        "value"?: string | null;
        "variant"?: "primary" | "secondary";
    }
    interface KekaProfessionalAvatar {
        "data"?: Users;
        "size"?: string;
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
    interface KekaTooltip {
        "arrow"?: boolean;
        "left"?: number;
        "position"?: "top"|"right"|"bottom"|"left";
        "text"?: string;
        "theme"?: string;
    }
    interface MyComponent {
    }
    interface ProgressIndicator {
        "fill"?: number;
        "showLabel"?: boolean;
        "tooltip"?: boolean;
    }
    interface IntrinsicElements {
        "avatar-stack": AvatarStack;
        "keka-avatar": KekaAvatar;
        "keka-dropdown": KekaDropdown;
        "keka-dropdown-item": KekaDropdownItem;
        "keka-global-header": KekaGlobalHeader;
        "keka-input": KekaInput;
        "keka-professional-avatar": KekaProfessionalAvatar;
        "keka-tab-bar": KekaTabBar;
        "keka-tab-item": KekaTabItem;
        "keka-tooltip": KekaTooltip;
        "my-component": MyComponent;
        "progress-indicator": ProgressIndicator;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "avatar-stack": LocalJSX.AvatarStack & JSXBase.HTMLAttributes<HTMLAvatarStackElement>;
            "keka-avatar": LocalJSX.KekaAvatar & JSXBase.HTMLAttributes<HTMLKekaAvatarElement>;
            "keka-dropdown": LocalJSX.KekaDropdown & JSXBase.HTMLAttributes<HTMLKekaDropdownElement>;
            "keka-dropdown-item": LocalJSX.KekaDropdownItem & JSXBase.HTMLAttributes<HTMLKekaDropdownItemElement>;
            "keka-global-header": LocalJSX.KekaGlobalHeader & JSXBase.HTMLAttributes<HTMLKekaGlobalHeaderElement>;
            "keka-input": LocalJSX.KekaInput & JSXBase.HTMLAttributes<HTMLKekaInputElement>;
            "keka-professional-avatar": LocalJSX.KekaProfessionalAvatar & JSXBase.HTMLAttributes<HTMLKekaProfessionalAvatarElement>;
            "keka-tab-bar": LocalJSX.KekaTabBar & JSXBase.HTMLAttributes<HTMLKekaTabBarElement>;
            "keka-tab-item": LocalJSX.KekaTabItem & JSXBase.HTMLAttributes<HTMLKekaTabItemElement>;
            "keka-tooltip": LocalJSX.KekaTooltip & JSXBase.HTMLAttributes<HTMLKekaTooltipElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "progress-indicator": LocalJSX.ProgressIndicator & JSXBase.HTMLAttributes<HTMLProgressIndicatorElement>;
        }
    }
}
