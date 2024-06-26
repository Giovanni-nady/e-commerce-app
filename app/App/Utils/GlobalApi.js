import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cltlzcgc61ge907w0tktbm3zb/master"


const getSlider = async () => {
  const query = gql`
    query GetSlider {
  sliders {
    id
    name
    image {
      url
    }
  }
}
  `
  const response = await request(MASTER_URL, query);
  return response;
}

const getCategories = async () => {
  const query = gql`
    query GetCategory {
  categories {
    id
    name
    icon {
      url
    }
  }
}
  `
  const response = await request(MASTER_URL, query);
  return response;
}

const getBusinessList = async () => {
  const query = gql`
  query getBusinessList {
  businessLists {
    id
    name
    address
    contactPerson
    email
    category {
      name
    }
    about
    image {
      url
    }
  }
}
  `
  const response = await request(MASTER_URL, query);
  return response;
}

const getBusinessListByCategory = async (category) => {
  const query = gql`
  query getBusinessList {
  businessLists(where: {category: {name: "`+category+`"}}) {
    id
    name
    address
    contactPerson
    email
    category {
      name
    }
    about
    image {
      url
    }
  }
}
  `
  const response = await request(MASTER_URL, query);
  return response;
}

export default {
  getSlider,
  getCategories,
  getBusinessList,
  getBusinessListByCategory
};