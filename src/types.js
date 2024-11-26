/**
 * @enum {string}
 * Represents the availability status of an article.
 */
export const ArticleAvailability = Object.freeze({
    IN_STOCK: 'instock',
    OUT_OF_STOCK: 'outofstock',
    LIMITED: 'limited',
    DISCONTINUED: 'discontinued',
    PREORDER: 'preorder',
});

/**
 * @enum {string}
 * Represents the type of cart.
 */
export const CartType = Object.freeze({
    WISHLIST: 'wishlist',
    BASKET: 'basket',
});

/**
 * @enum {string}
 * Represents the type of customer.
 */
export const CustomerType = Object.freeze({
    PRIVATE: 'private',
    BUSINESS: 'business',
});

/**
 * @enum {string}
 * Represents different salutations for customers.
 */
export const Salutation = Object.freeze({
    FEMALE: 'female',
    MALE: 'male',
    OTHER: 'other',
});

/**
 * @enum {string}
 * Represents the type of address.
 */
export const AddressType = Object.freeze({
    BILLING: 'billing',
    SHIPPING: 'shipping',
});

/**
 * @enum {string}
 * Represents different types of codes.
 */
export const CodeType = Object.freeze({
    NONE: 'none',
    INDIVIDUAL: 'individual',
    UNIVERSAL: 'universal',
});

/**
 * @enum {string}
 * Represents the domain of an application.
 */
export const ApplicationDomain = Object.freeze({
    BASKET: 'basket',
    ARTICLE: 'article',
    ALL: 'all',  // Not care / both(all) / None
});

/**
 * @enum {string}
 * Represents customer groups.
 */
export const CustomerGroup = Object.freeze({
    ALL: 'all',  // All customers
    FIRST_ORDER: 'first_order',  // First-time order
    FOLLOW_UP_ORDER: 'follow_up_order',  // Follow-up order (repeat customers)
});

/**
 * @enum {string}
 * Represents types of discounts.
 */
export const DiscountType = Object.freeze({
    PERCENTAGE: 'percentage',  // Percentage discount
    ABSOLUTE: 'absolute',  // Absolute discount
    FREE_ARTICLE: 'free_article',  // Free article (e.g., cart easter egg)
    FREE_SHIPPING: 'free_shipping',  // Free shipping
});

/**
 * @enum {string}
 * Represents logical operators for conditions.
 */
export const ConditionOperator = Object.freeze({
    ONE_OF: 'one_of',  // One condition must be satisfied
    ALL: 'all',  // All conditions must be satisfied
});

/**
 * @enum {string}
 * Represents the state of an order.
 */
export const OrderState = Object.freeze({
    ORDERED: 'ordered',  // Customer completed the order and clicked buy
    PAID: 'paid',  // Payment completed
    RTS: 'rts',  // Ready To Send (may not be paid yet)
});

/**
 * @enum {string}
 * Represents the mode for handling quantity.
 */
export const QuantityMode = Object.freeze({
    REPLACE: 'replace',  // Use the provided quantity as new value
    INCREASE: 'increase',  // Add the provided quantity to the current value
    DECREASE: 'decrease',  // Subtract the provided quantity from the current value
});

/**
 * @enum {string}
 * Represents the status of shipping.
 */
export const ShippingStatus = Object.freeze({
    USER: 'user',  // Shipping selected by a user
    CHEAPEST: 'cheapest',  // Cheapest shipping selected
});
