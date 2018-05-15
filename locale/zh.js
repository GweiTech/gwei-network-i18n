const zh_CN = {
    // Header
    'header.language': `简体中文`,
    'header.support': `帮助中心`,
    'header.contributor': `贡献者`,
    'header.creator': `创建者`,
    'header.menu.contributor': `贡献者`,
    'header.menu.creator': `创建者`,
    'header.menu.changeWallet': `切换钱包`,
    'header.search': `输入合约地址进行搜索`,

    // Footer
    'footer.disclaimer': `免责声明`,

    // Home
    'home.describe': `去中心化的投融资平台和协议`,
    'home.create': `创建共同基金合约`,

    // Disclaimer
    'disclaimer.title': `声明`,
    'disclaimer.txt1': `我们不对任何损失负责: `,
    'disclaimer.txt2': `我们正在持续完善和增加 GweNetwork 功能，我们初步聚焦用户体验，防范诈骗和合规化三个方面。我们已经全面测试了智能合约并确保安全，但总有不可预知的意外导致 Token 的损失，例如您转错地址，请谨慎操作。。`,
    'disclaimer.txt3': `资金都将由合约管理员进行管理。共同基金智能合约不能完全避免合约管理员对资金的管理不善。参与贡献共同基金合约时请务必确认管理员是您信任的人。`,
    'disclaimer.txt4': `请在您力所能及的范围内参与`,
    'disclaimer.txt5': `我们鼓励您在使用 GweiNetwork 服务前加入我们的社区提问并评估安全。`,

    // Login
    'login.title': `输入您的钱包地址`,
    'login.instructions': `为了与我们的智能合约引擎交互，我们首先需要获取您的以太坊钱包地址。`,
    'login.errInput.wallet': `必须是有效的以太坊地址`,
    'login.input.wallet': `您的钱包地址`,
    'login.btn.Submit': `提交`,

    // Create
    'create.errOperation.title': `操作失败`,
    'create.errOperation.maxPoolErr': `总规模限制小于个人最大限额`,
    'create.errOperation.maxPerErr': `个人最大限额小于个人最小限额`,
    'create.created.instructions': `您的共同基金已经生成激活，请与贡献者分享以下链接，或继续访问您的控制面板。`,
    'create.created.poolUrl': `共同基金智能合约地址 - 贡献者`,
    'create.created.btn.copy': `复制`,
    'create.created.btn.goPool': `前往控制面板`,
    'create.transaction.title': `创建共同基金智能合约`,
    'create.transaction.remind': `发送交易时请注意设置合适的 gas 价格，以避免浪费。`,
    'create.transaction.instructions1': `要创建您的共同基金合约，您需要从以下地址发送交易:`,
    'create.transaction.instructions2': `如果您通常使用 MyCrypto 或 MyEtherWallet, 可以使用以下链接快速生成交易信息:`,
    'create.transaction.instructions3': `或者，使用您选择的钱包提供商复制以下字段创建并发送交易:`,
    'create.transaction.instructions4': `为了防止部署合约时发生意外，请保存你的交易 Hash。`,
    'create.transaction.instructions5': `等待部署完成...`,
    'create.transaction.myCrypto': `MyCrypto 预填充数据`,
    'create.transaction.mew': `MEW 预填充数据`,
    'create.transaction.btn.copy': `复制`,
    'create.transaction.input.toAddress': `发送至地址`,
    'create.transaction.input.amount': `转账金额`,
    'create.transaction.input.gas': `Gas 限制`,
    'create.transaction.input.data': `十六进制数据`,
    'create.create.title': `创建共同基金智能合约`,
    'create.create.errInput.wallet': `必须是有效的以太坊地址`,
    'create.create.input.wallet': `你的钱包地址`, 
    'create.create.instructions': `以下所有配置都是可选的。`,
    'create.create.allocations': `规模配置`,
    'create.create.allocations.instructions': `您可以选择定义您的共同基金最大规模。此外，您可以定义每个贡献者的最低和最高额度。GweiNetwork 不强制规定最大最小额度。`,
    'create.create.errInput.maxPool': `基金最大规模必须大于 0`,
    'create.create.errInput.maxPer': `每人最大限额必须大于 0`,
    'create.create.errInput.minPer': `每人最小限额不小于 0`,
    'create.create.input.maxPool': `基金最大规模 (ETH)`,
    'create.create.input.maxPer': `每人最大限额 (ETH)`,
    'create.create.input.minPer': `每人最小限额 (ETH)`,
    'create.create.admins': `管理员`,
    'create.create.admins.instructions': `除创建者外，您可以最多为该共同基金智能合约分配三个管理员，可以是您信任的人或你的备用钱包地址。`,
    'create.create.errInput.admin1': `管理员 1 必须是有效的以太坊钱包地址`,
    'create.create.errInput.admin2': `管理员 2 必须是有效的以太坊钱包地址`,
    'create.create.errInput.admin3': `管理员 3 必须是有效的以太坊钱包地址`,
    'create.create.input.admin1': `管理员 1 地址`,
    'create.create.input.admin2': `管理员 2 地址`,
    'create.create.input.admin3': `管理员 3 地址`,
    'create.create.whitelist': `白名单`,
    'create.create.whitelist.instructions': `您可以决定是否启用白名单功能，当启用时，只有名单上的贡献者可以参与共同基金智能合约。如果选择"是"，您可以在合约生成后编辑白名单。编辑白名单的矿工费用可在我们的帮助中心了解更多。`,
    'create.create.input.whitelist': `启用白名单`,
    'create.create.input.whitelist.yes': `是`,
    'create.create.input.whitelist.no': `否`,
    'create.create.input.whitelist.instructions': `你可以在智能合约生成后编辑白名单.`,
    'create.create.fees': `手续费`,
    'create.create.fees.instructions': `您可以选择向您的共同基金贡献者收取费用。如果贡献者数量小于13人，GweiNetwork 不收取任何费用。如果你有更多的贡献者(包括13)，GweiNetwork 将收取 0.25% 的服务费。`,
    'create.create.errInput.fees': `您收取的费用需要大于等于 0% 并且小于等于 50.0%`,
    'create.create.input.fees': `百分比`,
    'create.create.input.fees.instructions1': `{fees} 归属于你。`,
    'create.create.input.fees.instructions2': `{fees} 归属于 GweiNetwork。 如果贡献者小于13人，那么你可以免费使用！`,
    'create.create.input.fees.instructions3': `总计:`,
    'create.create.input.fees.instructions4': `{fees1} (或 {fees2} 当贡献者小于)`,
    'create.create.btn.submit': `提交`,

    // Creator
    'creator.errOperation.title': `操作失败`,
    'creator.errOperation.invalidAddress': `无效的合约地址`,
    'creator.errOperation.invalidPool': `该地址未部署共同基金智能合约`,
    'creator.errOperation.notAdmin': `您不是该共同基金智能合约的管理员`,
    'creator.errOperation.maxPoolErr': `基金最大规模小于每人最大贡献额度`,
    'creator.errOperation.maxPerErr': `每人最大贡献额度小于每人最小贡献额度`,
    'creator.errOperation.tokenAddressErr': `此共同基金智能合约尚未拥有该类型 tokens，请先向此基金合约转入 tokens`,
    'creator.pool.wallet': `您的钱包地址:`,
    'creator.pool.btn.changeWallet': `(切换)`,
    'creator.pool.poolValue': `共同基金当前规模`,
    'creator.pool.currentBalance': `当前金额`,
    'creator.pool.paidOut': `已交付金额`,
    'creator.pool.amountPaid': `已交付金额`,
    'creator.pool.tokensReceived': `已收到的 Tokens`,
    'creator.pool.status': `状态:`,
    'creator.pool.fee': `费用:`,
    'creator.pool.btn.pay': `交付资金`,
    'creator.pool.btn.cancel': `取消基金`,
    'creator.pool.btn.confirmTokens': `确认 Token`,
    'creator.pool.btn.withdrawTokens': `取出 Token`,
    'creator.pool.btn.enableRefund': `启用退款`,
    'creator.pool.canceled.instructions': `您的共同基金智能合约已经取消，请通知您的贡献者取出资金。`,
    'creator.pool.refund.instructions': `您的共同基金智能合约当前处于退款状态。您可以通过多次交易退回任意金额，但是只能从您设置的地址进行退款:`,
    'creator.pool.btn.updateRefundAddress': `修改地址`,
    'creator.pool.maxPool': `基金最大规模:`,
    'creator.pool.maxPer': `最大每人贡献额度:`,
    'creator.pool.minPer': `最小每人贡献额度:`,
    'creator.pool.btn.edit': `编辑`,
    'creator.pool.url': `共同基金智能合约地址 - 向贡献者分享`,
    'creator.pool.btn.copy': `复制`,
    'creator.pool.admin': `管理员`,
    'creator.pool.contributors': `贡献者`,
    'creator.pool.contributors.amount': `金额 (ETH)`,
    'creator.pool.contributors.none': `还没有贡献者，请分享共同基金智能合约链接`,
    'creator.pool.whitelist': `白名单`,
    'creator.pool.whitelist.none': `当前未启用，如需使用请创建白名单`,
    'creator.pool.btn.createWhiltelist': `创建白名单`,
    'creator.pool.btn.editWhitelist': `编辑白名单`,
    'creator.pool.btn.sendForwardTransaction': `交易转发`,
    'creator.pool.btn.sendForwardTransaction.instructions': `发送带有用户自定义数据的交易（多级合约级连时使用）:`,
    'creator.transaction.title.payout': `交付资金`,
    'creator.transaction.title.forwardTransaction': `交易转发`,
    'creator.transaction.title.editInfo': `编辑合约限额`,
    'creator.transaction.title.editWhitelist': `编辑白名单`,
    'creator.transaction.title.cancelPool': `取消基金`,
    'creator.transaction.title.confirmTokens': `确认 Token`,
    'creator.transaction.title.withdrawTokens': `取出 Token`,
    'creator.transaction.title.enableRefunds': `开启退款`,
    'creator.transaction.title.updateRefundSender': `编辑退款地址`,
    'creator.transaction.instructions1': `您需要发送以下交易以完成此操作。`,
    'creator.transaction.instructions2': `如果您通常使用 MyCrypto 或 MyEtherWallet, 可以使用以下链接快速生成交易信息:`,
    'creator.transaction.instructions3': `或者，使用您选择的提供商复制以下字段创建并发送交易:`,
    'creator.transaction.myCrypto': `MyCrypto 预填充数据`,
    'creator.transaction.mew': `MEW 预填充数据`,
    'creator.transaction.btn.copy': `复制`,
    'creator.transaction.input.toAddress': `发送至地址`,
    'creator.transaction.input.amount': `转账金额`,
    'creator.transaction.input.gas': `Gas 限制`,
    'creator.transaction.input.data': `十六进制数据`,
    'creator.updateRefundSender.title': `编辑退款发送者地址`,
    'creator.updateRefundSender.instructions': `设置授权将退款发送至共同基金合约的钱包地址。`,
    'creator.updateRefundSender.errInput.senderAddress': `必须是有效的以太坊地址`,
    'creator.updateRefundSender.input.senderAddress': `指定退款发送者地址`,
    'creator.updateRefundSender.btn.submit': `提交`,
    'creator.enableRefunds.title': `启用退款`,
    'creator.enableRefunds.instructions': `这个操作是不可逆的！如果您想继续，请输入将退款发送至共同基金的地址。`,
    'creator.enableRefunds.errInput.senderAddress': `必须是有效的以太坊地址`,
    'creator.enableRefunds.input.senderAddress': `发送者地址`,
    'creator.enableRefunds.btn.submit': `提交`,
    'creator.confirmTokens.title': `确认 tokens`,
    'creator.confirmTokens.instructions': `输入 Token 合约地址（您输入 MyCrypto 或 MEW 显示 Token 余额的地址），以确认 Token 已转入共同基金。`,
    'creator.confirmTokens.errInput.tokenAddress': `必须是有效的以太坊地址`,
    'creator.confirmTokens.input.tokenAddress': `Token 合约地址`,
    'creator.confirmTokens.btn.submit': `提交`,
    'creator.withdrawTokens.title': `取出 Token`,
    'creator.withdrawTokens.instructions': `发送交易前请确认此共同基金合约内有足够该类型 Token。`,
    'creator.withdrawTokens.errInput.tokenAddress': `必须是有效的以太坊地址`,
    'creator.withdrawTokens.errInput.recipientAddress': `必须是有效的以太坊地址`,
    'creator.withdrawTokens.errInput.amount': `金额必须大于0`,
    'creator.withdrawTokens.input.tokenAddress': `Token 合约地址`,
    'creator.withdrawTokens.input.recipientAddress': `收款地址`,
    'creator.withdrawTokens.input.amount': `金额`,
    'creator.withdrawTokens.btn.submit': `提交`,
    'creator.forwardTransaction.title': `交易转发`,
    'creator.forwardTransaction.instructions': `以合约身份转发交易，用于多级合约级连，发送前请确认你已经获得了需要转发的准确数据.`,
    'creator.forwardTransaction.errInput.address': `必须是有效的以太坊地址`,
    'creator.forwardTransaction.errInput.data': `必须是有效的十六进制数据`,
    'creator.forwardTransaction.input.address': `发送至地址`,
    'creator.forwardTransaction.input.data': `十六进制数据`,
    'creator.forwardTransaction.btn.submit': `提交`,
    'creator.payout.title': `交付资金`,
    'creator.payout.instructions': `将共同基金智能合约中的所有资金发送到您选择的地址。完成此操作后，共同基金智能合约将不再接受来自贡献者的 ETH。`,
    'creator.payout.errInput.address': `必须是有效的以太坊地址`,
    'creator.payout.errInput.data': `必须是有效的十六进制数据`,
    'creator.payout.input.address': `收款地址`,
    'creator.payout.input.data': `十六进制数据 (可选)`,
    'creator.payout.input.data.instructions': `只有当您想要交付到需要数据输入的合同时，数据字段才是必需的。`,
    'creator.payout.btn.submit': `提交`,
    'creator.cancelPool.title': `取消基金`,
    'creator.cancelPool.instructions': `取消共同基金合约的操作是不可逆的。它将要求所有贡献者撤回他们的资金，并会阻止你的任何操作。`,
    'creator.cancelPool.btn.cancel': `取消基金`,
    'creator.editInfo.title': `编辑限额`,
    'creator.editInfo.errInput.maxPool': `基金最大规模必须大于 0`,
    'creator.editInfo.errInput.maxPer': `每人贡献最大额度必须大于 0`,
    'creator.editInfo.errInput.minPer': `每人贡献最小额度不能小于 0`,
    'creator.editInfo.input.maxPool': `基金最大规模 (ETH)`,
    'creator.editInfo.input.maxPer': `每人贡献最大额度 (ETH)`,
    'creator.editInfo.input.minPer': `每人贡献最小额度 (ETH)`,
    'creator.editInfo.btn.submit': `提交`,
    'creator.editWhitelist.title': `编辑白名单`,
    'creator.editWhitelist.errInput.list': `[ {part} ] 不是有效的以太坊地址`,
    'creator.editWhitelist.errInput.noChange': `您没有对白名单进行任何更改`,
    'creator.editWhitelist.instructions': `完整的白名单以太坊地址列表。`,
    'creator.editWhitelist.input.instructions': `通过空格，半角逗号，或换行分隔地址。`,
    'creator.editWhitelist.btn.submit': `编辑白名单`,

    // Contributor
    'contributor.remind': `不要参与不信任的共同基金智能合约，不要被骗！`,
    'contributor.errOperation.title': `操作失败`,
    'contributor.errOperation.invalidAddress': `无效的合约地址`,
    'contributor.errOperation.invalidPool': `该地址未部署共同基金合约`,
    'contributor.pool.walletAddress': `您的钱包地址:`,
    'contributor.pool.changeWallet': `(切换)`,
    'contributor.pool.instructions': `您的钱包地址不在此合约白名单中。登录其他钱包或联系共同基金合约管理员以获得更多信息。`,
    'contributor.pool.poolValue': `共同基金当前规模`,
    'contributor.pool.currentBalance': `当前金额`,
    'contributor.pool.amountPaid': `已支付金额`,
    'contributor.pool.maxPool': `基金最大规模`,
    'contributor.pool.maxPer': `每人最大贡献金额`,
    'contributor.pool.minPer': `每人最小贡献金额`,
    'contributor.pool.myContribution': `我的贡献金额`,
    'contributor.pool.myTokenBalance': `我的 TOKEN 金额`,
    'contributor.pool.status': `状态:`,
    'contributor.pool.fee': `费用:`,
    'contributor.pool.btn.contribute': `贡献资金`,
    'contributor.pool.btn.getToken': `取出我的TOKEN`,
    'contributor.pool.btn.withdraw': `取出资金`,
    'contributor.pool.myTransactions': `我的交易记录`,
    'contributor.pool.myTransactionsValue': `金额`,
    'contributor.pool.myTransactions.none': `没有交易记录,向此共同基金进行贡献以开始使用`,
    'contributor.transaction.title.contribute': `贡献该共同基金合约`,
    'contributor.transaction.title.withdraw': `从该共同基金合约中撤出资金`,
    'contributor.transaction.title.getToken': `取出您的 Token`,
    'contributor.transaction.instructions1': `您需要发送以下交易以完成此操作。`,
    'contributor.transaction.instructions2': `如果您通常使用 MyCrypto 或 MyEtherWallet, 可以使用以下链接快速生成交易信息:`,
    'contributor.transaction.instructions3': `或者，使用您选择的提供商复制以下字段创建并发送交易:`,
    'contributor.transaction.myCrypto': `MyCrypto 预填充数据`,
    'contributor.transaction.mew': `MEW 预填充数据`,
    'contributor.transaction.btn.copy': `复制`,
    'contributor.transaction.input.toAddress': `发送至地址`,
    'contributor.transaction.input.amount': `转账金额`,
    'contributor.transaction.input.gas': `Gas 限制`,
    'contributor.transaction.input.data': `十六进制数据`,
    'contributor.contribute.title': `投入资金到此共同基金合约`,
    'contributor.contribute.instructions': `您有权限对此共同基金进行贡献，请输入您的贡献金额。`,
    'contributor.contribute.max': `最大可贡献金额:`,
    'contributor.contribute.errInput.amount': `金额必须大于 0`,
    'contributor.contribute.input.amount': `贡献金额 (ETH)`,
    'contributor.contribute.btn.submit': `提交`,
    'contributor.withdraw.title': `从该共同基金合约取出资金`,
    'contributor.withdraw.instructions': `您可以自由撤回此共同基金中的部分或全部贡献金额。`,
    'contributor.withdraw.contribution': `你的贡献金额:`,
    'contributor.withdraw.withdrawAll': `取出您所有已投入的资金`,
    'contributor.withdraw.withdrawAll.yes': `是`,
    'contributor.withdraw.withdrawAll.no': `否`,
    'contributor.withdraw.errInput.amount': `金额必须大于 0`,
    'contributor.withdraw.input.amount': `金额`,
    'contributor.withdraw.btn.submit': `提交`,

    // CreateToken
    'createToken.transaction.launch.instructions': `你的 Token 合约已经成功创建，请妥善保存您的合约地址。`,
    'createToken.transaction.launch.tokenAddress': `你的 Token 合约地址`,
    'createToken.transaction.launch.btn.copy': `复制`,
    'createToken.transaction.launch.btn.goDashboard': `前往控制面板`,
    'createToken.transaction.title': `创建您的 Token`,
    'createToken.transaction.instructions1': `您需要发送以下交易以完成此操作。`,
    'createToken.transaction.instructions2': `如果您通常使用 MyCrypto 或 MyEtherWallet, 可以使用以下链接快速生成交易信息:`,
    'createToken.transaction.instructions3': `或者，使用您选择的提供商复制以下字段创建并发送交易:`,
    'createToken.transaction.instructions4': `为了防止部署合约时发生意外，请保存你的交易 Hash。`,
    'createToken.transaction.waiting': `等待部署完成...`,
    'createToken.transaction.myCrypto': `MyCrypto 预填充数据`,
    'createToken.transaction.mew': `MEW 预填充数据`,
    'createToken.transaction.btn.copy': `复制`,
    'createToken.transaction.input.toAddress': `发送至地址`,
    'createToken.transaction.input.amount': `转账金额`,
    'createToken.transaction.input.gas': `Gas 限制`,
    'createToken.transaction.input.data': `十六进制数据`,
    'createToken.create.page.create': `创建`,
    'createToken.create.page.manage': `管理`,
    'createToken.create.title': `创建您的 Token`,
    'createToken.create.instructions': `通过模版创建您的 Token 智能合约。`,
    'createToken.create.errInput.owner': `必须是有效的以太坊地址`,
    'createToken.create.errInput.name': `无效的名称`,
    'createToken.create.errInput.symbol': `无效的符号`,
    'createToken.create.errInput.total': `无效的总金额`,
    'createToken.create.input.owner': `Token 合约创建者`,
    'createToken.create.owner.instructions': `输入一个钱包地址作为新 TOKEN 合约的拥有者。`,
    'createToken.create.input.name': `Token 名称`,
    'createToken.create.name.instructions': `输入您的 Token 名称。`,
    'createToken.create.input.symbol': `Token 符号`,
    'createToken.create.symbol.instructions': `输入您的 Token 符号。`,
    'createToken.create.input.total': `总金额`,
    'createToken.create.total.instructions1': `总金额必须处于 100000000 和 1000000000 之间。`,
    'createToken.create.total.instructions2': `精确度为小数点后 18 位。`,
    'createToken.create.btn.submit': `提交`,

    // ManageToken
    'manageToken.errOperation.title': `操作失败`,
    'manageToken.errOperation.invalidAddress': `该地址没有部署 Token 合约`,
    'manageToken.transaction.title': `Token 转账`,
    'manageToken.transaction.instructions1': `您需要发送以下交易以完成此操作。`,
    'manageToken.transaction.instructions2': `如果您通常使用 MyCrypto 或 MyEtherWallet, 可以使用以下链接快速生成交易信息:`,
    'manageToken.transaction.instructions3': `或者，使用您选择的提供商复制以下字段创建并发送交易:`,
    'manageToken.transaction.myCrypto': `MyCrypto 预填充数据`,
    'manageToken.transaction.mew': `MEW 预填充数据`,
    'manageToken.transaction.btn.copy': `复制`,
    'manageToken.transaction.input.toAddress': `发送至地址`,
    'manageToken.transaction.input.amount': `转账金额`,
    'manageToken.transaction.input.gas': `Gas 限制`,
    'manageToken.transaction.input.data': `十六进制数据`,
    'manageToken.manage.page.create': `创建`,
    'manageToken.manage.page.manage': `管理`,
    'manageToken.manage.page.code': `源码`,
    'manageToken.manage.launch': `加载您的 Token 合约`,
    'manageToken.manage.launch.instructions': `交易完成后，请重新点击加载按钮刷新页面。`,
    'manageToken.manage.errInput.tokenAddress': `必须是有效的以太坊地址`,
    'manageToken.manage.btn.load': `加载`,
    'manageToken.manage.name': `Token 名称`,
    'manageToken.manage.symbol': `Token 符号`,
    'manageToken.manage.total': `总金额`,
    'manageToken.manage.decimals': `小数位数`,
    'manageToken.manage.tokenAddress': `Token 合约地址`,
    'manageToken.manage.tokenOwner': `Token 合约创建者`,
    'manageToken.manage.getBalance': `查询账户金额`,
    'manageToken.manage.errInput.tokenWallet': `必须是有效的以太坊地址`,
    'manageToken.manage.btn.getBalance': `查询`,
    'manageToken.manage.transfer': `Token 转账`,
    'manageToken.manage.errInput.toAddress': `收款地址必须是有效的以太坊地址`,
    'manageToken.manage.errInput.amount': `转账金额必须大于 0`,
    'manageToken.manage.transfer.toAddress.placeholder': `收款地址`,
    'manageToken.manage.transfer.amount.placeholder': `转账金额`,
    'manageToken.manage.transfer.instructions': `发送交易前请确认您的钱包有足够的余额。`,
    'manageToken.manage.btn.transfer': `转账`,
    'manageToken.manage.owners': `所有 token 持有者`,
    'manageToken.manage.amount': `金额`,
    'manageToken.manage.err': `出了点问题，请确认您输入了正确的 Token 合约地址`,
}

export default zh_CN;


