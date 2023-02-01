
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.9.0
 * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
 */
Prisma.prismaVersion = {
  client: "4.9.0",
  engine: "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AssetsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  baseNetworkId: 'baseNetworkId',
  type: 'type',
  ticker: 'ticker',
  fireblocksTicker: 'fireblocksTicker',
  enabled: 'enabled',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BaseNetworksScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  addressUrl: 'addressUrl',
  feeAssetId: 'feeAssetId',
  txUrl: 'txUrl',
  enabled: 'enabled',
  baseBps: 'baseBps',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CustodyEngineEventTypesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CustodyEngineEventsScalarFieldEnum = makeEnum({
  id: 'id',
  organizationId: 'organizationId',
  custodyEngineEventTypeId: 'custodyEngineEventTypeId',
  event: 'event',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CustodyVendorVaultAssetsScalarFieldEnum = makeEnum({
  id: 'id',
  vendorId: 'vendorId',
  vendorRef: 'vendorRef',
  balance: 'balance',
  vaultAssetId: 'vaultAssetId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.DepositAddressStatusTypesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.DepositAddressesScalarFieldEnum = makeEnum({
  id: 'id',
  vaultAssetId: 'vaultAssetId',
  address: 'address',
  depositAddressStatusId: 'depositAddressStatusId',
  vendorId: 'vendorId',
  vendorRef: 'vendorRef',
  subjectId: 'subjectId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.InstitutionalProductsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  enabled: 'enabled',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: Prisma.JsonNull
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
});

exports.Prisma.OrdersScalarFieldEnum = makeEnum({
  id: 'id',
  quoteId: 'quoteId',
  orderStatus: 'orderStatus',
  userAcceptedPrice: 'userAcceptedPrice',
  userAcceptedQuantity: 'userAcceptedQuantity',
  userAcceptedSide: 'userAcceptedSide',
  userAcceptedTradePair: 'userAcceptedTradePair',
  userAcceptedTimestamp: 'userAcceptedTimestamp',
  orderType: 'orderType',
  orderTimeInForce: 'orderTimeInForce',
  vendorQuoteId: 'vendorQuoteId',
  vendorQuantityRequested: 'vendorQuantityRequested',
  vendorPriceRequested: 'vendorPriceRequested',
  orderQuantityExecuted: 'orderQuantityExecuted',
  orderPriceExecuted: 'orderPriceExecuted',
  orderTimestampExecuted: 'orderTimestampExecuted',
  orderVendorStatus: 'orderVendorStatus',
  allowedSlippage: 'allowedSlippage',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.OrganizationStatusTypesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.OrganizationsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  primaryEmail: 'primaryEmail',
  pricingPlanId: 'pricingPlanId',
  statusId: 'statusId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PricingPlanProfilesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  quoteEngineRps: 'quoteEngineRps',
  custodyEngineRps: 'custodyEngineRps',
  numberOfUsers: 'numberOfUsers',
  sla: 'sla',
  rbac: 'rbac',
  quoteEngineClaims: 'quoteEngineClaims',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PricingPlanSupportsAssetsScalarFieldEnum = makeEnum({
  id: 'id',
  vendorSupportsAssetId: 'vendorSupportsAssetId',
  pricingPlanId: 'pricingPlanId',
  enabled: 'enabled',
  buyBps: 'buyBps',
  sellBps: 'sellBps',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PricingPlansScalarFieldEnum = makeEnum({
  id: 'id',
  price: 'price',
  active: 'active',
  pricingPlanProfileId: 'pricingPlanProfileId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.QuoteStatusesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QuotesScalarFieldEnum = makeEnum({
  id: 'id',
  quoteStatusId: 'quoteStatusId',
  sourceAssetId: 'sourceAssetId',
  targetAssetId: 'targetAssetId',
  side: 'side',
  userId: 'userId',
  vendorId: 'vendorId',
  extraData: 'extraData',
  error: 'error',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  fxRequestID: 'fxRequestID',
  buyPrice: 'buyPrice',
  sellPrice: 'sellPrice',
  quantity: 'quantity'
});

exports.Prisma.SequelizeDataScalarFieldEnum = makeEnum({
  name: 'name'
});

exports.Prisma.SequelizeMetaScalarFieldEnum = makeEnum({
  name: 'name'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TokenPairsInfoScalarFieldEnum = makeEnum({
  id: 'id',
  tokenPairId: 'tokenPairId',
  fxRequestID: 'fxRequestID',
  quantity: 'quantity',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TokenPairsScalarFieldEnum = makeEnum({
  id: 'id',
  baseToken: 'baseToken',
  quoteToken: 'quoteToken',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  vendorId: 'vendorId'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TransactionPoliciesScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  transactionTypeId: 'transactionTypeId',
  sourceVaultId: 'sourceVaultId',
  targetVaultId: 'targetVaultId',
  targetWithdrawalAddressId: 'targetWithdrawalAddressId',
  toOneTimeAddresses: 'toOneTimeAddresses',
  greaterThanUSD: 'greaterThanUSD',
  assetId: 'assetId',
  action: 'action',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TransactionStatusTypesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TransactionTypesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TransactionsScalarFieldEnum = makeEnum({
  id: 'id',
  custodyVendorId: 'custodyVendorId',
  custodyVendorRef: 'custodyVendorRef',
  transactionTypeId: 'transactionTypeId',
  amountAsset: 'amountAsset',
  amountUSD: 'amountUSD',
  assetId: 'assetId',
  transactionStatusTypeId: 'transactionStatusTypeId',
  onChainTxId: 'onChainTxId',
  sourceVaultId: 'sourceVaultId',
  targetVaultId: 'targetVaultId',
  targetWithdrawalAddressId: 'targetWithdrawalAddressId',
  sourceExternalAddress: 'sourceExternalAddress',
  createdByUserId: 'createdByUserId',
  subjectId: 'subjectId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UserTypesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  claims: 'claims',
  isServiceAccount: 'isServiceAccount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
  id: 'id',
  organizationId: 'organizationId',
  userTypeId: 'userTypeId',
  primaryEmail: 'primaryEmail',
  firstName: 'firstName',
  lastName: 'lastName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  publicKey: 'publicKey',
  apiKey: 'apiKey'
});

exports.Prisma.VaultAssetsScalarFieldEnum = makeEnum({
  id: 'id',
  vaultId: 'vaultId',
  assetId: 'assetId',
  balance: 'balance',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.VaultStatusTypesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.VaultsScalarFieldEnum = makeEnum({
  id: 'id',
  createdByUserId: 'createdByUserId',
  vaultStatusId: 'vaultStatusId',
  vaultName: 'vaultName',
  subjectId: 'subjectId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.VendorSupportsAssetsScalarFieldEnum = makeEnum({
  id: 'id',
  assetId: 'assetId',
  vendorId: 'vendorId',
  enabled: 'enabled',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  theirId: 'theirId'
});

exports.Prisma.VendorTypesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.VendorsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  identifier: 'identifier',
  vendorTypeId: 'vendorTypeId',
  quoteEngineBaseBps: 'quoteEngineBaseBps',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WebhookRequestsScalarFieldEnum = makeEnum({
  id: 'id',
  webhookId: 'webhookId',
  institutionalProductId: 'institutionalProductId',
  httpStatusCode: 'httpStatusCode',
  requestPayload: 'requestPayload',
  responsePayload: 'responsePayload',
  custodyEngineEventId: 'custodyEngineEventId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WebhookStatusTypesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WebhooksScalarFieldEnum = makeEnum({
  id: 'id',
  organizationId: 'organizationId',
  webhookStatusTypeId: 'webhookStatusTypeId',
  url: 'url',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WithdrawalAddressesScalarFieldEnum = makeEnum({
  id: 'id',
  organizationId: 'organizationId',
  assetId: 'assetId',
  nickname: 'nickname',
  address: 'address',
  subjectId: 'subjectId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});
exports.enum_assets_type = makeEnum({
  crypto: 'crypto',
  fiat: 'fiat'
});

exports.enum_orders_orderType = makeEnum({
  GTC: 'GTC',
  GTX: 'GTX',
  FOK: 'FOK',
  LIMIT: 'LIMIT',
  MARKET: 'MARKET'
});

exports.enum_orders_userAcceptedSide = makeEnum({
  BUY: 'BUY',
  SELL: 'SELL',
  INFO: 'INFO',
  SWAP: 'SWAP'
});

exports.enum_quotes_side = makeEnum({
  BUY: 'BUY',
  SELL: 'SELL',
  INFO: 'INFO',
  SWAP: 'SWAP'
});

exports.enum_transactionPolicies_action = makeEnum({
  allow: 'allow',
  deny: 'deny'
});

exports.Prisma.ModelName = makeEnum({
  SequelizeData: 'SequelizeData',
  SequelizeMeta: 'SequelizeMeta',
  assets: 'assets',
  baseNetworks: 'baseNetworks',
  quotes: 'quotes',
  transactionStatusTypes: 'transactionStatusTypes',
  transactionTypes: 'transactionTypes',
  transactions: 'transactions',
  users: 'users',
  vendorTypes: 'vendorTypes',
  vendors: 'vendors',
  custodyEngineEventTypes: 'custodyEngineEventTypes',
  custodyEngineEvents: 'custodyEngineEvents',
  custodyVendorVaultAssets: 'custodyVendorVaultAssets',
  depositAddressStatusTypes: 'depositAddressStatusTypes',
  depositAddresses: 'depositAddresses',
  institutionalProducts: 'institutionalProducts',
  orders: 'orders',
  organizationStatusTypes: 'organizationStatusTypes',
  organizations: 'organizations',
  pricingPlanProfiles: 'pricingPlanProfiles',
  pricingPlanSupportsAssets: 'pricingPlanSupportsAssets',
  pricingPlans: 'pricingPlans',
  quoteStatuses: 'quoteStatuses',
  tokenPairs: 'tokenPairs',
  tokenPairsInfo: 'tokenPairsInfo',
  transactionPolicies: 'transactionPolicies',
  userTypes: 'userTypes',
  vaultAssets: 'vaultAssets',
  vaultStatusTypes: 'vaultStatusTypes',
  vaults: 'vaults',
  vendorSupportsAssets: 'vendorSupportsAssets',
  webhookRequests: 'webhookRequests',
  webhookStatusTypes: 'webhookStatusTypes',
  webhooks: 'webhooks',
  withdrawalAddresses: 'withdrawalAddresses'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
