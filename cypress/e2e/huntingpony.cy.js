
describe('Тестирование HuntingPony', function () {
    
    it('Проверяю кейс добавления товара в корзину и оформление заказа', function () {
        cy.visit('https://huntingpony.com');
        cy.get("a[href='/product/pony-avtokreslo-1']").last().click();
        cy.wait(1500)
        cy.get("button[data-add-cart-counter-btn]").click();
        cy.get("button[data-add-cart-counter-plus]").click({ force: true });
        cy.wait(1500)
        cy.get("a[href='/cart_items']").first().click();
        cy.wait(1500)
        cy.get("button[data-cart-submit]").click();
        cy.end();
    })
})
