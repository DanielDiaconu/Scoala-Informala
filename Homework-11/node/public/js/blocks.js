$(document).ready(() => {
  const getLink = (block) => {
    const { id } = block;
    return `<li id="${id}"><a href="#">${id}</a> <span>X</span></li>`;
  };
  $.ajax("/blocks", {
    success: (blocks) => {
      const blockElements = blocks.map(getLink);
      $("#blocks").append(blockElements);
    },
  });
  $("#blocks").on("click", "a", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const id = $(event.currentTarget).parent().attr("id");
    $.ajax(`/blocks/${id}`, {
      success: (block) => {
        const { description } = block;
        $("#block-description").text(description);
      },
    });
  });

  $("#blocks").on("click", "span", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const id = $(event.currentTarget).parent().attr("id");
    $.ajax(`/blocks/${id}`, {
      success: (block) => {
        const newBlock = $(`#${block.id}`);
        newBlock.remove();
      },
    });
  });
});
