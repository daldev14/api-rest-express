const PRODUCTS = document.querySelector("#products");

const routes = {
  products: [
    {
      method: "GET",
      url: "http://localhost:3000/api/v1/products?limit=1&offset=0",
    },
    {
      method: "GET",
      url: "http://localhost:3000/api/v1/products/276ae23b-46e8-42ac-b24f-6e93cac85c27",
      text: "http://localhost:3000/api/v1/products/id",
    },
    {
      method: "GET",
      url: "http://localhost:3000/api/v1/products/category/smartphones",
    },
    {
      method: "POST",
      url: "http://localhost:3000/api/v1/products",
    },
    {
      method: "POST",
      url: "http://localhost:3000/api/v1/products/20476778-730e-405b-b7e3-2902cb8fe2e8",
    },
  ],
  categories: [],
  users: [],
};

const stylesMethods = {
  GET: "route__method--get",
  POST: "route__method--post",
  PUT: "route__method--put",
  PATCH: "route__method--patch",
  DELETE: "route__method--delete",
};

const createList = (data, tag) => {
  const ul = document.createElement("ul");
  ul.classList.add("route__list");
  let li = "";

  for (let i = 0; i < data.length; i++) {
    li += `
    <li>
      <a href="${data[i].url}" target="_blank" class="route__link">
        <span class="route__method ${stylesMethods[data[i].method]}">
          ${data[i].method}
        </span>
        ${data[i].text ?? data[i].url}
      </a>
    </li>`;
  }

  ul.innerHTML = li;
  tag.appendChild(ul);

  return ul;
};

createList(routes.products, PRODUCTS);
