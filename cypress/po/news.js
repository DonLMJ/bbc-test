export const commentIcon = 'span.gs-o-bullet__icon.gel-icon.gs-c-comment-count__icon.nw-c-comment__icon'
export const infoList = 'ul.gs-o-list-inline.gs-o-list-inline--divided.gel-brevier.gs-u-mt-'
export const infoListElement = 'li.nw-c-promo-meta'
export const iFrameElem = '.ssrcss-floim3-StylediFrame'
export const commentInput = 'form.comments__input'
export const commentSignInPrompt = 'p.comments__signin--prompt'
//page object model, here we should find everything needed to intercat with /news
class Page {
    //here I would overtake the problem by loading a page with at least one commentable news or simply looping and stopping properly
    clickFirstCommentableNews() {
            cy.get(infoList).each(($el, index) => {
                if (cy.wrap($el).find(infoListElement).length === 3) {
                    cy.get(commentIcon).first().click()
                    return false
                }
                if (index === 20) {
                    cy.log("Pausing because no commentable article found")
                    cy.pause()
                    Cypress.runner.stop()
                }
                else {
                    cy.log('No commentable news')
                    cy.log(index)
                }
            })
        //this weekend I saw no commentable article to be honest
        //case with no condition
        //cy.get(commentIcon).first().click()
    }

    findElementInIframeComments(element) {
        cy.get(iFrameElem).its('0.contentDocument').its('body').then(cy.wrap).find(element)
    }
}

export const page = new Page()

